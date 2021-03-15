import { IVotingKeys } from "../../../models";

export interface VotingKeysState {
    loading: boolean;
    votingKeys: IVotingKeys[];
}
