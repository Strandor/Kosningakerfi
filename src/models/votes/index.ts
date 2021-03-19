import { DataTypes, Model } from "sequelize";
import { sequelizeInstance } from "../../utils";
import { IVotes } from "./interface";

export class Votes extends Model implements IVotes {
  public votingKeyId: string;
  public candidacyId: string;
  public applicationId: string;
}

Votes.init(
  {
    votingKeyId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    candidacyId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    applicationId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    modelName: "votes",
    sequelize: sequelizeInstance,
    indexes: [
      {
        fields: ["votingKeyId", "candidacyId"],
        unique: true,
      },
    ],
  }
);

// Todo check for limit
