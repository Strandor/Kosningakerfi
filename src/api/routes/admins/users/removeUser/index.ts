import { Request, Response } from "express";
import { Users } from "../../../../../models";

export default async (req: Request, res: Response) => {
  try {
    const user = await Users.findOne({
      attributes: ["id", "username"],
      where: {
        id: req.params.id,
      },
    });

    if (!user) throw Error("User does not exist");

    await user.destroy();

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
