import { DataTypes, Model } from "sequelize";
import { Applications } from "..";
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

Votes.beforeCreate(async (vote) => {
	const application = await Applications.findOne({
		attributes: ["maxVotes"],
		where: {
			id: vote.applicationId,
		},
	});

	if (!application) throw Error("Could not find application");

	const count = await Votes.count({
		where: {
			votingKeyId: vote.votingKeyId,
			applicationId: vote.applicationId,
		},
	});

	if (count >= application.maxVotes) throw Error("Max votes exceeded");
});
