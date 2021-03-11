import {
    DataTypes,
    HasManyCreateAssociationMixin,
    Model,
    UUIDV4,
} from "sequelize";
import bcrypt from "bcrypt";
import { sequelizeInstance } from "../../utils";
import { IAuthenticate, IUsers } from "./interface";
import { SATL_ROUNDS } from "./utils";
import { Sessions } from "..";

/**
 * Database model for Users, this model is used for administrators to view the status of applications and voting
 */
export class Users extends Model implements IUsers {
    public id: string;
    public username: string;
    public password: string;

    public createSession: HasManyCreateAssociationMixin<Sessions>;

    /**
     * Function to authenticate user and will validate if the credentials provided are correct
     * @param param0 authenticate data
     * @returns Object containing id, username, session
     */
    public static async authenticate({
        username,
        password,
        userAgent,
    }: IAuthenticate) {
        const user = await Users.findOne({
            attributes: ["id", "password"],
            where: {
                username: username,
            },
        });

        if (!user) throw Error("Invalid username");

        const isCorrectPassword = await bcrypt.compare(user.password, password);
        if (!isCorrectPassword) throw Error("Invalid password");

        const session = await this.createSession({
            userAgent: userAgent,
        });

        return {
            user,
            session,
        };
    }
}

Users.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
    },
    {
        modelName: "users",
        sequelize: sequelizeInstance,
    }
);

Users.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, SATL_ROUNDS);
});
