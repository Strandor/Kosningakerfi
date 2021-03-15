import { DataTypes, Model, UUIDV4 } from "sequelize";
import { sequelizeInstance } from "../../utils";
import { IVotingKeys } from "./interface";
import crypto from "crypto";
import { Users } from "..";

export class VotingKeys extends Model implements IVotingKeys {
    public id: string;
    public code: string;
    public isFramtidin: boolean;
    public usedAt: Date;
    public user?: Users;
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
