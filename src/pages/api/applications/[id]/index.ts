// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

export default async ({ method }: NextApiRequest, res: NextApiResponse) => {
  switch (method) {
    case "GET":
      return res.json({
        id: "s",
        name: "Framtidin",
      });
    default:
      return res.status(405).json({
        message: `${method} not allowed`,
      });
  }
};
