import { DataTypes, Model, UUIDV4 } from "sequelize";
import { sequelizeInstance } from "../../utils.ts";
import { IApplications } from "./interface";

export class Applications extends Model implements IApplications {
  public id: string;
  public name: string;
}

Applications.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    applicationCategoryId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "applications",
  }
);

export * from "./interface";
