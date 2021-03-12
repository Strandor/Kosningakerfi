import { Request, Response } from "express";
import { Users } from "../../../../models";

export default async (req: Request, res: Response) => {
    try {
        const user = await Users.create(
            {
                ...req.body,
            },
            {
                fields: ["username", "password"],
            }
        );

        await user.reload({
            attributes: ["id", "username"],
        });

        res.send(user);
    } catch (error) {
        res.status(500).send({
            message: error.message,
        });
    }
};
