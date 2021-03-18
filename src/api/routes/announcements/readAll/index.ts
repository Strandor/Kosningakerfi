import { Response, Request } from "express";
import { Op } from "sequelize";
import { Announcements } from "../../../../models";

export default async (req: Request, res: Response) => {
  try {
    const doc = await Announcements.findAll({
      where: {
        startAt: {
          [Op.gte]: new Date(),
        },
        endAt: {
          [Op.lte]: new Date(),
        },
      },
    });

    res.send(doc);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
