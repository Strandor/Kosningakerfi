import axios from "axios";
import { all, put, takeLatest } from "redux-saga/effects";
import {
  ApplicationsActions,
  selectApplication,
  selectApplicationSuccess,
} from "../..";
import { IApplications, IApplicationsCategory } from "../../../models";
import {
  fetchApplicationsFailure,
  fetchApplicationsSuccess,
  selectApplicationFailure,
} from "../../actions";
import { ExtractActionFromActionCreator } from "../../types";

export function* onFetchApplications() {
  try {
    const res = yield axios.get<IApplicationsCategory[]>("/api/applications");

    yield put(fetchApplicationsSuccess(res.data));
  } catch (error) {
    yield put(fetchApplicationsFailure(error));
  }
}

export function* onSelectApplication(
  action: ExtractActionFromActionCreator<typeof selectApplication>
) {
  try {
    const res = yield axios.get<IApplications>(
      `/api/applications/${action.payload}`
    );

    yield put(selectApplicationSuccess(res.data));
  } catch (error) {
    yield put(selectApplicationFailure(error));
  }
}

export function* applications() {
  yield all([
    yield takeLatest("SELECT_APPLICATION", onSelectApplication),
    yield takeLatest("FETCH_APPLICATIONS", onFetchApplications),
  ]);
}
