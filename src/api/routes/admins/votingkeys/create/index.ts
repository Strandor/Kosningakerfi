import { Request, Response } from "express";
import { VotingKeys } from "../../../../../models/votingKeys";

export default async (req: Request, res: Response) => {
    try {
        const doc = await VotingKeys.create(
            {
                ...req.body,
                userId: req.body.user.id,
            },
            {
                fields: ["isFramtidin", "userId"],
            }
        );

        await doc.reload({
            attributes: ["id", "code", "usedAt"],
        });

        res.send(doc);
    } catch (error) {
        res.status(500).send({
            message: error.message,
        });
    }
};
