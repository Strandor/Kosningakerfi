import { ICandidacy } from "../../../models";
import { VotingState, addVote, removeVote } from "../../../redux";

export interface IProps {
	candidacies: ICandidacy[];
	voting: VotingState;
	maxVotes: number;
	addVote: typeof addVote;
	removeVote: typeof removeVote;
}
