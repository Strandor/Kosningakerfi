import { IApplications } from "../../../models";
import { createAction, createErrorAction } from "../../helpers";
import { GenericError } from "../../types";

export enum AppActions {
  CREATE_ALERT = "CREATE_ALERT",
  CLOSE_ALERT = "CLOSE_ALERT",
}

export function createAlert(payload: string) {
  return createAction(AppActions.CREATE_ALERT, payload);
}

export function closeAlert() {
  return createAction(AppActions.CLOSE_ALERT);
}
