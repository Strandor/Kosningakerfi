// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { Applications } from "../../../../models";

export default async (
  { method, query }: NextApiRequest,
  res: NextApiResponse
) => {
  switch (method) {
    case "GET":
      const doc = await Applications.findOne({
        where: {
          id: query.id,
        },
        attributes: ["id", "name", "numApplicants"],
      });

      if (!doc)
        return res.status(404).json({
          message: "Application not found",
        });

      return res.json(doc);
    default:
      return res.status(405).json({
        message: `${method} not allowed`,
      });
  }
};
