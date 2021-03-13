import { Request, Response, NextFunction } from "express";
import { Sessions, Users } from "../../../models";

export const fetchAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cookie = req.cookies.session;
    if (!cookie) {
      res.status(401).send({
        message: "Missing cookie",
      });
      return;
    }

    const session = await Sessions.findOne({
      attributes: ["id", "userId"],
      include: [
        {
          model: Users,
          attributes: ["id", "username"],
        },
      ],
    });

    if (!session) {
      res.status(401).send({
        message: "Invalid ession",
      });
      return;
    }

    req.body.user = session.user;
    next();
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
