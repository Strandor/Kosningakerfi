import { Op } from "sequelize";
import { Request, Response } from "express";
import { VotingKeys } from "../../../../models";

export default async (req: Request, res: Response) => {
	try {
		const votingKey = await VotingKeys.findOne({
			where: {
				id: req.params.id,
				usedAt: null,
			},
		});

		if (!votingKey) {
			res.status(404).send({
				message: "Could not find voting key",
			});
			return;
		}

		if (votingKey.expiresAt && new Date() > votingKey.expiresAt) {
			res.status(404).send({
				message: "Voting key expired",
			});
			return;
		}

		await votingKey.createVotes(req.body);

		res.send({});
	} catch (error) {
		res.status(500).send({
			message: error.message,
		});
	}
};
