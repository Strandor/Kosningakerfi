import { Candidacy } from "../../../../models";
import { Request, Response } from "express";
import { s3 } from "../../../../services";
import { AWS_REGION } from "../../../../utils";
import { v4 as uuidv4 } from "uuid";

export default async (req: Request, res: Response) => {
    try {
        let url;
        if (req.body.image) {
            const key = uuidv4();
            url = `https://kosningar-mr.s3-${AWS_REGION}.amazonaws.com/${key}`;

            const buf = Buffer.from(
                req.body.image.replace(/^data:image\/\w+;base64,/, ""),
                "base64"
            );

            const upload: void = await new Promise((resolve, reject) => {
                s3.putObject(
                    {
                        Key: key,
                        Bucket: "kosningar-mr",
                        Body: buf,
                        ContentEncoding: "base64",
                        ACL: "public-read",
                    },
                    async (error) => {
                        if (error) reject(error);

                        resolve();
                    }
                );
            });
        }

        await Candidacy.createCandidacy({
            ...req.body,
            image: url,
        });

        res.json({});
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
