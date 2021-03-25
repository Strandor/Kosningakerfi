import { Request, Response } from "express";
import {
	Applications,
	ApplicationsCategory,
	Candidacy,
} from "../../../../models";
import { Candidats } from "../../../../models/candidats";

export default async (req: Request, res: Response) => {
	try {
		const doc = await Applications.findOne({
			where: {
				id: req.params.id,
			},
			attributes: [
				"id",
				"name",
				"description",
				"minNumApplicants",
				"maxNumApplicants",
				"isAccepting",
			],
			include: [
				{
					model: Candidacy,
					attributes: ["id", "name", "description", "image"],
					where: {
						removedAt: null,
					},
					include: [
						{
							model: Candidats,
							attributes: ["name"],
						},
					],
				},
			],
		});

		if (!doc)
			res.status(404).json({
				message: "Application not found",
			});

		res.json(doc);
	} catch (error) {
		res.send({
			message: error.message,
		});
	}
};
