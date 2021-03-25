import { ApplicationsActions } from "../../actions";
import { Reducer } from "../../types";
import { ApplicationsState } from "./interface";
import { initialState } from "./utils";

export const ApplicationsReducer: Reducer<ApplicationsState> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case ApplicationsActions.FETCH_APPLICATIONS:
			return {
				...state,
				isLoading: true,
			};
		case ApplicationsActions.FETCH_APPLICATIONS_SUCCESS:
			return {
				...state,
				isLoading: false,
				applications: action.payload,
			};
		case ApplicationsActions.FETCH_APPLICATIONS_FAILURE:
			return {
				...state,
				isLoading: false,
			};
		case ApplicationsActions.SELECT_APPLICATION:
			return {
				...state,
				isLoading: true,
				selected: undefined,
			};
		case ApplicationsActions.SELECT_APPLICATION_SUCCESS:
			return {
				...state,
				isLoading: false,
				selected: action.payload,
			};
		case ApplicationsActions.SELECT_APPLICATION_FAILURE:
			return {
				...state,
				isLoading: false,
			};
		default:
			return {
				...state,
			};
	}
};

export * from "./interface";
