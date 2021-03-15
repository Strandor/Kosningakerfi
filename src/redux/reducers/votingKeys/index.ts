import { VotingKeysActions } from "../../actions";
import { Reducer } from "../../types";
import { VotingKeysState } from "./interface";
import { initialState } from "./utils";

export const VotingKeysReducer: Reducer<VotingKeysState> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case VotingKeysActions.FETCH_VOTING_KEYS:
            return {
                ...state,
                loading: true,
            };
        case VotingKeysActions.FETCH_VOTING_KEYS_SUCCESS:
            return {
                ...state,
                loading: false,
                votingKeys: action.payload,
            };
        case VotingKeysActions.FETCH_VOTING_KEYS_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case VotingKeysActions.CREATE_VOTING_KEY:
            return {
                ...state,
                loading: true,
            };
        case VotingKeysActions.CREATE_VOTING_KEY_SUCCESS:
            return {
                ...state,
                loading: false,
                votingKeys: [action.payload, ...state.votingKeys],
            };
        case VotingKeysActions.CREATE_VOTING_KEY_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return {
                ...state,
            };
    }
};

export * from "./interface";
