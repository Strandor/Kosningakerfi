import { IVoting, IVotingKeys } from "../../../models";

export interface VotingState {
	loading: boolean;
	votingKeys: IVotingKeys[];
	votes: string[];
	voting?: IVoting;
}
