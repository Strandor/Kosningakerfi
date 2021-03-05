import { IApplications } from "../../../models";
import { createAction, createErrorAction } from "../../helpers";
import { GenericError } from "../../types";

export enum ApplicationsActions {
  FETCH_APPLICATIONS = "FETCH_APPLICATIONS",
  FETCH_APPLICATIONS_SUCCESS = "FETCH_APPLICATIONS_SUCCESS",
  FETCH_APPLICATIONS_FAILURE = "FETCH_APPLICATIONS_FAILURE",

  SELECT_APPLICATION = "SELECT_APPLICATION",
  SELECT_APPLICATION_SUCCESS = "SELECT_APPLICATION_SUCCESS",
  SELECT_APPLICATION_FAILURE = "SELECT_APPLICATION_FAILURE",
}

export function fetchApplications() {
  return createAction(ApplicationsActions.FETCH_APPLICATIONS);
}

export function fetchApplicationsSuccess(payload: IApplications[]) {
  return createAction(ApplicationsActions.FETCH_APPLICATIONS_SUCCESS, payload);
}

export function fetchApplicationsFailure<E extends GenericError>(error: E) {
  return createErrorAction(
    ApplicationsActions.FETCH_APPLICATIONS_FAILURE,
    error
  );
}

export function selectApplication(id: string) {
  return createAction(ApplicationsActions.SELECT_APPLICATION, id);
}

export function selectApplicationSuccess(payload: IApplications) {
  return createAction(ApplicationsActions.SELECT_APPLICATION_SUCCESS, payload);
}

export function selectApplicationFailure<E extends GenericError>(error: E) {
  return createErrorAction(
    ApplicationsActions.SELECT_APPLICATION_FAILURE,
    error
  );
}
