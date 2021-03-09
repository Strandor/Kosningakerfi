// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { Candidacy } from "../../../models";
import multer from "multer";
import multers3 from "multer-s3";

export default async (
  { method, body }: NextApiRequest,
  res: NextApiResponse
) => {
  switch (method) {
    case "POST":
      try {
        await Candidacy.createCandidacy({
          ...body,
        });

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
