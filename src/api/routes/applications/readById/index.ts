import { Request, Response } from "express";
import { Applications, ApplicationsCategory } from "../../../../models";

export default async (req: Request, res: Response) => {
  try {
    const doc = await Applications.findOne({
      where: {
        id: req.params.id,
      },
      attributes: [
        "id",
        "name",
        "description",
        "minNumApplicants",
        "maxNumApplicants",
        "isAccepting",
      ],
    });

    if (!doc)
      res.status(404).json({
        message: "Application not found",
      });

    res.json(doc);
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
};
