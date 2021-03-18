import axios, { AxiosResponse } from "axios";
import { all, put, takeLatest } from "redux-saga/effects";
import { IAnnouncements } from "../../../models";
import {
  fetchAnnouncementsFailure,
  fetchAnnouncementsSucess,
} from "../../actions";

export function* onFetchAnnouncements() {
  try {
    const res: AxiosResponse<IAnnouncements[]> = yield axios.get<
      IAnnouncements[]
    >("/api/announcements");

    yield put(fetchAnnouncementsSucess(res.data));
  } catch (error) {
    yield put(fetchAnnouncementsFailure(error));
  }
}

export function* announcements() {
  yield all([yield takeLatest("FETCH_ANNOUNCEMENTS", onFetchAnnouncements)]);
}
