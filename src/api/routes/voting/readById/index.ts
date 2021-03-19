import { Request, Response } from "express";
import { Op } from "sequelize";
import { Applications, Candidacy, VotingKeys } from "../../../../models";

export default async (req: Request, res: Response) => {
  try {
    const votingKey = await VotingKeys.findOne({
      attributes: ["id", "isFramtidin"],
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

    const applications = await Applications.findAll({
      attributes: ["id", "name"],
      where: {
        isFramtidin: {
          [Op.or]: [false, votingKey.isFramtidin],
        },
      },
      include: [
        {
          model: Candidacy,
          attributes: ["id", "name"],
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
