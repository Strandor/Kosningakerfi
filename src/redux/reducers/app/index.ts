import { AppActions, ApplicationsActions } from "../../actions";
import { Reducer } from "../../types";
import { AppState } from "./interface";
import { initialState } from "./utils";

export const AppReducer: Reducer<AppState> = (state = initialState, action) => {
  switch (action.type) {
    case AppActions.CREATE_ALERT:
      return {
        ...state,
        globalAlert: action.payload,
      };
    case AppActions.CLOSE_ALERT:
      return {
        ...state,
        globalAlert: undefined,
      };
    default:
      return {
        ...state,
      };
  }
};

export * from "./interface";
