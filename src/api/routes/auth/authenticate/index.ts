import { Users } from "../../../../models";
import { Request, Response } from "express";
import { isDev } from "../../../../server";

export default async (req: Request, res: Response) => {
  try {
    const auth = await Users.authenticate({
      ...req.body,
      userAgent: req.headers["user-agent"],
    });

    res
      .cookie("session", auth.session.id, {
        expires: new Date(Date.now() + 100000),
        httpOnly: true,
        sameSite: "strict",
        secure: !isDev,
      })
      .send(auth.user);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
