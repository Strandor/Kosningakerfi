import { Users } from "..";

export interface IVotingKeys {
	id: string;
	isFramtidin: boolean;
	usedAt: Date;
	expiresAt?: Date;
	user?: Users;
}
