import { Request, Response } from "express";
import { Op } from "sequelize";
import {
	Applications,
	ApplicationsCategory,
	Candidacy,
	VotingKeys,
} from "../../../../models";

export default async (req: Request, res: Response) => {
	try {
		const votingKey = await VotingKeys.findOne({
			attributes: ["id", "isFramtidin", "expiresAt"],
			where: {
				id: req.params.id,
				usedAt: null,
			},
		});

		if (!votingKey) {
			res.status(404).send({
				message: "The voting key was not found",
			});
			return;
		}

		if (votingKey.expiresAt && new Date() > votingKey.expiresAt) {
			res.status(404).send({
				message: "Voting key expired",
			});
			return;
		}

		const applications = await ApplicationsCategory.findAll({
			attributes: ["id", "name"],
			order: [
				["listOrder", "ASC"],
				[Applications, "listOrder", "ASC"],
			],
			include: [
				{
					model: Applications,
					attributes: ["id", "name", "maxVotes"],
					where: {
						isFramtidin: {
							[Op.or]: [false, votingKey.isFramtidin],
						},
					},
					include: [
						{
							model: Candidacy,
							attributes: ["id", "name"],
							where: {
								removedAt: null,
							},
							required: true,
						},
					],
				},
			],
		});

		res.send({
			votingKey,
			applications,
		});
	} catch (error) {
		res.status(500).send({
			message: error.message,
		});
	}
};
