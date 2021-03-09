import { DataTypes, Model } from "sequelize";
import { sequelizeInstance } from "../../utils.ts";
import { ICandidacy } from "./interface";

export class Candidacy extends Model implements ICandidacy {
  public name: string;
  public description: string;
  public image?: string;
  public applicationId: string;
}

Candidacy.init(
  {
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
