import { IAnnouncements } from "../../../models";
import { createAction, createErrorAction } from "../../helpers";
import { GenericError } from "../../types";

export enum AnnouncementsActions {
  FETCH_ANNOUNCEMENTS = "FETCH_ANNOUNCEMENTS",
  FETCH_ANNOUNCEMENTS_SUCCESS = "FETCH_ANNOUNCEMENTS_SUCCESS",
  FETCH_ANNOUNCEMENTS_FAILURE = "FETCH_ANNOUNCEMENTS_FAILURE",

  CLOSE_ANNOUNCEMENT = "CLOSE_ALERT",
}

export function fetchAnnouncements() {
  return createAction(AnnouncementsActions.FETCH_ANNOUNCEMENTS);
}

export function fetchAnnouncementsSucess(payload: IAnnouncements[]) {
  return createAction(
    AnnouncementsActions.FETCH_ANNOUNCEMENTS_SUCCESS,
    payload
  );
}

export function fetchAnnouncementsFailure<E extends GenericError>(error: E) {
  return createErrorAction(
    AnnouncementsActions.FETCH_ANNOUNCEMENTS_FAILURE,
    error
  );
}

export function closeAnnouncement() {
  return createAction(AnnouncementsActions.CLOSE_ANNOUNCEMENT);
}
