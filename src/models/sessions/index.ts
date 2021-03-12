import { DataTypes, Model, UUIDV4 } from "sequelize";
import { Users } from "..";
import { sequelizeInstance } from "../../utils";
import { ISessions } from "./interface";

export class Sessions extends Model implements ISessions {
  public id: string;
  public userAgent: string;
  public userId: string;
  public user?: Users;
}

Sessions.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    userAgent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    modelName: "sessions",
    sequelize: sequelizeInstance,
  }
);
