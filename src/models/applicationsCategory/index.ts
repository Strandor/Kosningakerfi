import { DataTypes, Model, UUIDV4 } from "sequelize";
import { sequelizeInstance } from "../../utils";
import { IApplications } from "../appplications";
import { IApplicationsCategory } from "./interface";

export class ApplicationsCategory
  extends Model
  implements IApplicationsCategory {
  public id: string;
  public name: string;
  public applications?: IApplications[];
}

ApplicationsCategory.init(
  {
    id: {
      primaryKey: true,
      defaultValue: UUIDV4,
      type: DataTypes.UUID,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: "applicationsCategory",
    sequelize: sequelizeInstance,
  }
);

export * from "./interface";
