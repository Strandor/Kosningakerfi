import { Request, Response } from "express";
import { Applications, ApplicationsCategory } from "../../../../models";

export default async (_req: Request, res: Response) => {
  const doc = await ApplicationsCategory.findAll({
    attributes: ["name"],
    order: [
      ["name", "ASC"],
      [Applications, "name", "ASC"],
    ],
    include: [
      {
        model: Applications,
        attributes: ["id", "name"],
      },
    ],
  });

  res.send(doc);
};
