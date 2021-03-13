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
    case UsersActions.FETCH_USERS:
      return {
        ...state,
        loading: true,
      };
    case UsersActions.FETCH_USERS_SUCEESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case UsersActions.FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case UsersActions.CREATE_USER:
      return {
        ...state,
        loading: true,
      };
    case UsersActions.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};

export * from "./interface";
