import { IVoting, IVotingKeys } from "../../../models";

export interface VotingState {
	loading: boolean;
	votingKeys: IVotingKeys[];
	voting?: IVoting;
}
