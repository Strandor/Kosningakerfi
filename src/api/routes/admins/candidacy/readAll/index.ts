import { NextFunction, Request, Response } from "express";
import { Applications, Candidacy } from "../../../../../models";
import { Candidats } from "../../../../../models/candidats";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const doc = await Applications.findAll({
      attributes: ["id", "name"],
      include: [
        {
          model: Candidacy,
          attributes: ["id", "name"],
          include: [
            {
              model: Candidats,
              attributes: ["id", "name"],
            },
          ],
        },
      ],
    });

    res.send(doc);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
