import { VotingActions } from "../../actions";
import { Reducer } from "../../types";
import { VotingState } from "./interface";
import { initialState } from "./utils";

export const VotingKeysReducer: Reducer<VotingState> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case VotingActions.FETCH_VOTING:
			return {
				...state,
				loading: true,
			};
		case VotingActions.FETCH_VOTING_SUCCESS:
			return {
				...state,
				loading: false,
				voting: action.payload,
			};
		case VotingActions.FETCH_VOTING_FAILURE:
			return {
				...state,
				loading: false,
			};
		case VotingActions.FETCH_VOTING_KEYS:
			return {
				...state,
				loading: true,
			};
		case VotingActions.FETCH_VOTING_KEYS_SUCCESS:
			return {
				...state,
				loading: false,
				votingKeys: action.payload,
			};
		case VotingActions.FETCH_VOTING_KEYS_FAILURE:
			return {
				...state,
				loading: false,
			};
		case VotingActions.CREATE_VOTING_KEY:
			return {
				...state,
				loading: true,
			};
		case VotingActions.CREATE_VOTING_KEY_SUCCESS:
			return {
				...state,
				loading: false,
				votingKeys: [action.payload, ...state.votingKeys],
			};
		case VotingActions.CREATE_VOTING_KEY_FAILURE:
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
