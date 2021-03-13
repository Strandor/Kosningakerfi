import { CandidacyActions } from "../../actions";
import { Reducer } from "../../types";
import { CandidacyState } from "./interface";
import { initialState } from "./utils";

export const CandidacyReducer: Reducer<CandidacyState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CandidacyActions.CREATE_CANDIDACY:
      return {
        ...state,
        loading: true,
      };
    case CandidacyActions.CREATE_CANDIDACY_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case CandidacyActions.CREATE_CANDIDACY_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
      };
    case CandidacyActions.CLEAR_SUCCESS:
      return {
        ...state,
        success: false,
      };
    case CandidacyActions.FETCH_CANDIDACIES:
      return {
        ...state,
        loading: true,
      };
    case CandidacyActions.FETCH_CANDIDACIES_SUCCESS:
      return {
        ...state,
        loading: false,
        candidacies: action.payload,
      };
    case CandidacyActions.FETCH_CANDIDACIES_FAILURE:
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
