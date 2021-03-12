import { ApplicationsActions, UsersActions } from "../../actions";
import { Reducer } from "../../types";
import { UsersState } from "./interface";
import { initialState } from "./utils";

export const UsersReducer: Reducer<UsersState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UsersActions.AUTHENTICATE:
      return {
        ...state,
        loading: true,
      };
    case UsersActions.AUTHENTICATE_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        user: action.payload,
      };
    case UsersActions.AUTHENTICATE_FAILURE:
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
