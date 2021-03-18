import { DataTypes, Model, NOW, UUIDV4 } from "sequelize";
import { sequelizeInstance } from "../../utils";
import { IAnnouncements } from "./interface";

export class Announcements extends Model implements IAnnouncements {
  public text: string;
  public startAt: Date;
  public endAt: Date;
}

Announcements.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: NOW,
    },
    endAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: NOW,
    },
  },
  {
    modelName: "announcements",
    sequelize: sequelizeInstance,
  }
);

export * from "./interface";
