import { Users } from "../../../models";
import { Request, Response } from "express";
import { isDev } from "../../../server";

export default async (req: Request, res: Response) => {
    try {
        const auth = await Users.authenticate(req.body);

        res.cookie("session", auth.session, {
            expires: new Date(Date.now() + 100000),
            httpOnly: true,
            sameSite: "strict",
            secure: !isDev,
        }).send(auth.user);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
