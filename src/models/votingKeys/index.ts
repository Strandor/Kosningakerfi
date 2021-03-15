import { DataTypes, Model, UUIDV4 } from "sequelize";
import { sequelizeInstance } from "../../utils";
import { IVotingKeys } from "./interface";
import crypto from "crypto";

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
            allowNull: true,
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

VotingKeys.beforeCreate(async (votingKey) => {
    votingKey.code = crypto.randomBytes(5).toString("hex");
});

export * from "./interface";
