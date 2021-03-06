import { DataTypes, Model, UUIDV4 } from "sequelize";
import { Candidacy } from "..";
import { sequelizeInstance } from "../../utils";
import { IApplications } from "./interface";

export class Applications extends Model implements IApplications {
	public id: string;
	public name: string;
	public description?: string;
	public minNumApplicants: number;
	public maxNumApplicants: number;
	public maxVotes: number;
	public isAccepting: boolean;
	public isFramtidin: boolean;
	public candidacies: Candidacy[];
	public listOrder: number;
}

Applications.init(
	{
		id: {
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: UUIDV4,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		applicationCategoryId: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		minNumApplicants: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 1,
		},
		maxNumApplicants: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 1,
		},
		maxVotes: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 1,
		},
		isAccepting: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true,
		},
		isFramtidin: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		listOrder: {
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: true,
			autoIncrement: true,
		},
	},
	{
		sequelize: sequelizeInstance,
		modelName: "applications",
	}
);

export * from "./interface";
