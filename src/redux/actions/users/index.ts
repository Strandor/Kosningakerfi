import { IUsers } from "../../../models/users/interface";
import { createAction, createErrorAction } from "../../helpers";
import { GenericError } from "../../types";
import { IAuthenticateData } from "./interface";

export enum UsersActions {
  AUTHENTICATE = "AUTHENTICATE",
  AUTHENTICATE_SUCCESS = "AUTHENTICATE_SUCCESS",
  AUTHENTICATE_FAILURE = "AUTHENTICATE_FAILURE",

  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCEESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE",

  CREATE_USER = "CREATE_USER",
  CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS",
  CREATE_USER_FAILURE = "CREATE_USER_FAILURE",
}

export function authenticate(payload: IAuthenticateData) {
  return createAction(UsersActions.AUTHENTICATE, payload);
}

export function authenticateSuccess(payload: IUsers) {
  return createAction(UsersActions.AUTHENTICATE_SUCCESS, payload);
}

export function authenticateFailure<E extends GenericError>(error: E) {
  return createErrorAction(UsersActions.AUTHENTICATE_FAILURE, error);
}

export function fetchUsers() {
  return createAction(UsersActions.FETCH_USERS);
}

export function fetchUsersSuccess(payload: IUsers[]) {
  return createAction(UsersActions.FETCH_USERS_SUCEESS, payload);
}

export function fetchUsersFailure<E extends GenericError>(error: E) {
  return createErrorAction(UsersActions.FETCH_USERS_FAILURE, error);
}

export function createUser(payload: IAuthenticateData) {
  return createAction(UsersActions.CREATE_USER, payload);
}

export function createUserSuccess(payload: IUsers) {
  return createAction(UsersActions.CREATE_USER_SUCCESS, payload);
}

export function createUsersFailure<E extends GenericError>(error: E) {
  return createErrorAction(UsersActions.CREATE_USER_FAILURE, error);
}
