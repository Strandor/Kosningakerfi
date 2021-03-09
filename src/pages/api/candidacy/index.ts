// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { Candidacy } from "../../../models";

export default async (
  { method, body }: NextApiRequest,
  res: NextApiResponse
) => {
  switch (method) {
    case "POST":
      try {
        await Candidacy.create(
          {
            ...body,
          },
          {
            fields: ["name", "description", "applicationId"],
          }
        );

        return res.json({});
      } catch (error) {
        return res.status(500).json({
          message: error.message,
        });
      }
    default:
      return res.status(405).json({
        message: `${method} not allowed`,
      });
  }
};
