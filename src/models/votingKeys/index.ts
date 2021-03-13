import { DataTypes, Model, UUIDV4 } from "sequelize";
import { sequelizeInstance } from "../../utils";
import { IVotingKeys } from "./interface";

export class VotingKeys extends Model implements IVotingKeys {
  public id: string;
  public code: string;
  public isFramtidin: boolean;
  public usedAt: Date;
}

VotingKeys.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    isFramtidin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    usedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    modelName: "votingKeys",
    sequelize: sequelizeInstance,
  }
);
