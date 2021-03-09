import { createAction, createErrorAction } from "../../helpers";
import { GenericError } from "../../types";
import { ICreateCandidacy } from "./interface";

export enum CandidacyActions {
  CREATE_CANDIDACY = "CREATE_CANDIDACY",
  CREATE_CANDIDACY_SUCCESS = "CREATE_CANDIDACY_SUCCESS",
  CREATE_CANDIDACY_FAILURE = "CREATE_CANDIDACY_FAILURE",
}

export function createCandidacy(payload: ICreateCandidacy) {
  return createAction(CandidacyActions.CREATE_CANDIDACY, payload);
}

export function createCandidacySuccess() {
  return createAction(CandidacyActions.CREATE_CANDIDACY_SUCCESS);
}

export function createCandidacyFailure<E extends GenericError>(error: E) {
  return createErrorAction(CandidacyActions.CREATE_CANDIDACY_FAILURE, error);
}
