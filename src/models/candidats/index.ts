import { DataTypes, Model, UUIDV4 } from "sequelize";
import { sequelizeInstance } from "../../utils";
import { ICandidats } from "./interface";

export class Candidats extends Model implements ICandidats {
  public name: string;
  public candidacyId: string;
}

Candidats.init(
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
    candidacyId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    modelName: "candidats",
    sequelize: sequelizeInstance,
  }
);
