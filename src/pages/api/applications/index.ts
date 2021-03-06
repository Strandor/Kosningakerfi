// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { Applications, ApplicationsCategory } from "../../../models";

export default async ({ method }: NextApiRequest, res: NextApiResponse) => {
  switch (method) {
    case "GET":
      const doc = await ApplicationsCategory.findAll({
        attributes: ["name"],
        include: [
          {
            model: Applications,
            attributes: ["id", "name"],
          },
        ],
      });

      return res.json(doc);
    default:
      return res.status(405).json({
        message: `${method} not allowed`,
      });
  }
};
