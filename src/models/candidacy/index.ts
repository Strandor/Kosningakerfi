import {
  DataTypes,
  HasManyCreateAssociationMixin,
  Model,
  UUIDV4,
} from "sequelize";
import { sequelizeInstance } from "../../utils";
import { Applications } from "../appplications";
import { Candidats } from "../candidats";
import { ICandidats } from "../candidats/interface";
import { ICandidacy } from "./interface";

export class Candidacy extends Model implements ICandidacy {
  public candidats: ICandidats[];
  public id: string;
  public name: string;
  public description: string;
  public image?: string;
  public applicationId: string;

  public static async createCandidacy(candidacy: ICandidacy) {
    const applicaiton = await Applications.findOne({
      where: {
        id: candidacy.applicationId,
      },
      attributes: ["minNumApplicants", "maxNumApplicants"],
    });

    const t = await sequelizeInstance.transaction();

    try {
      if (!applicaiton) throw Error("Application does not exist");

      if (!candidacy.candidats) throw Error("Vantar nemendur");

      const min = applicaiton.getDataValue("minNumApplicants");
      if (min > candidacy.candidats.length)
        throw Error("Vantar nemendur a.m.k." + min);

      const max = applicaiton.getDataValue("maxNumApplicants");
      if (max < candidacy.candidats.length)
        throw Error("Of margir nemendur ekki fleiri en " + max);

      const doc = await Candidacy.create(candidacy, {
        transaction: t,
        fields: ["name", "description", "applicationId", "image"],
      });

      const id = doc.getDataValue("id");

      if (candidacy.candidats) {
        for (const canditat of candidacy.candidats) {
          await Candidats.create(
            {
              ...canditat,
              candidacyId: id,
            },
            {
              transaction: t,
              fields: ["name", "candidacyId"],
            }
          );
        }
      }

      await t.commit();
    } catch (error) {
      await t.rollback();
      throw error;
    }
  }
}

Candidacy.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT({
        length: "long",
      }),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    applicationId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    modelName: "candidacy",
    sequelize: sequelizeInstance,
  }
);
