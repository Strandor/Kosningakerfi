import { IUsers } from "../../../models/users/interface";
import { createAction, createErrorAction } from "../../helpers";
import { GenericError } from "../../types";
import { IAuthenticateData } from "./interface";

export enum UsersActions {
  AUTHENTICATE = "AUTHENTICATE",
  AUTHENTICATE_SUCCESS = "AUTHENTICATE_SUCCESS",
  AUTHENTICATE_FAILURE = "AUTHENTICATE_FAILURE",
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
