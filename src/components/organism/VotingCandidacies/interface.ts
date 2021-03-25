import { IApplications, ICandidacy } from "../../../models";
import { VotingState, addVote, removeVote } from "../../../redux";

export interface IProps {
	voting: VotingState;
	application: IApplications;
	addVote: typeof addVote;
	removeVote: typeof removeVote;
}
