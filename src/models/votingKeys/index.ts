import { DataTypes, Model, UUIDV4 } from "sequelize";
import { sequelizeInstance } from "../../utils";
import { IVotingKeys } from "./interface";
import crypto from "crypto";
import { Users } from "..";
import { Votes } from "../votes";
import { Applications } from "../";
import { Candidacy } from "../candidacy";

export class VotingKeys extends Model implements IVotingKeys {
	public id: string;
	public code: string;
	public isFramtidin: boolean;
	public usedAt: Date;
	public user?: Users;

	public async createVotes(votes: string[]) {
		const t = await sequelizeInstance.transaction();

		try {
			if (this.usedAt) throw Error("Voting key already used");

			for (const vote of votes) {
				const doc = await Candidacy.findOne({
					where: {
						id: vote,
					},
				});

				if (!doc) throw Error("Could not find candidacy");

				await Votes.create(
					{
						applicationId: doc.applicationId,
						candidacyId: doc.id,
						votingKeyId: this.id,
					},
					{
						transaction: t,
					}
				);
			}

			await VotingKeys.update(
				{
					usedAt: new Date(),
				},
				{
					where: {
						id: this.id,
					},
					transaction: t,
				}
			);

			await t.commit();
		} catch (error) {
			await t.rollback();
			throw error;
		}
	}
}

VotingKeys.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: UUIDV4,
			primaryKey: true,
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
		userId: {
			type: DataTypes.UUID,
			allowNull: false,
		},
	},
	{
		modelName: "votingKeys",
		sequelize: sequelizeInstance,
	}
);

export * from "./interface";
