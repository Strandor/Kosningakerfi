import { Request, Response } from "express";
import { Users } from "../../../../../models";

export default async (req: Request, res: Response) => {
  const users = await Users.findAll({
    attributes: ["id", "username"],
  });

  res.status(200).send(users);
};
