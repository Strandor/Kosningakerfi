import { Request, Response } from "express";
import { Users, VotingKeys } from "../../../../../models";

export default async (req: Request, res: Response) => {
    try {
        const doc = await VotingKeys.findAll({
            attributes: ["id", "isFramtidin", "usedAt"],
            include: [
                {
                    model: Users,
                    attributes: ["username"],
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
