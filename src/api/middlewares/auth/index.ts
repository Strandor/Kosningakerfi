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
      return res.status(401).send({
        message: "Missing cookie",
      });
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
      return res.status(401).send({
        message: "Invalid ession",
      });
    }

    req.body.user = session.user;
    next();
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
