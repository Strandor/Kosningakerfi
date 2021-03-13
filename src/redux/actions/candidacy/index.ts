import { IApplications } from "../../../models";
import { ICandidacy } from "../../../models/candidacy/interface";
import { createAction, createErrorAction } from "../../helpers";
import { GenericError } from "../../types";
import { ICreateCandidacy } from "./interface";

export enum CandidacyActions {
  CREATE_CANDIDACY = "CREATE_CANDIDACY",
  CREATE_CANDIDACY_SUCCESS = "CREATE_CANDIDACY_SUCCESS",
  CREATE_CANDIDACY_FAILURE = "CREATE_CANDIDACY_FAILURE",
  CLEAR_SUCCESS = "CLEAR_SUCCESS",

  FETCH_CANDIDACIES = "FETCH_CANDIDACIES",
  FETCH_CANDIDACIES_SUCCESS = "FETCH_CANDIDACIES_SUCCESS",
  FETCH_CANDIDACIES_FAILURE = "FETCH_CANDIDACIES_FAILURE",
}

export function clearSuccess() {
  return createAction(CandidacyActions.CLEAR_SUCCESS);
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

export function fetchCandidacies() {
  return createAction(CandidacyActions.FETCH_CANDIDACIES);
}

export function fetchCandidaciesSuccess(payload: IApplications[]) {
  return createAction(CandidacyActions.FETCH_CANDIDACIES_SUCCESS, payload);
}

export function fetchCandidaciesFailure<E extends GenericError>(error: E) {
  return createErrorAction(CandidacyActions.FETCH_CANDIDACIES_FAILURE, error);
}
