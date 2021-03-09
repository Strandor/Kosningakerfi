import axios, { AxiosResponse } from "axios";
import { all, put, takeLatest } from "redux-saga/effects";
import {
  ApplicationsActions,
  selectApplication,
  selectApplicationSuccess,
} from "../..";
import { IApplications } from "../../../models";
import {
  createCandidacy,
  createCandidacyFailure,
  createCandidacySuccess,
  fetchApplicationsFailure,
  fetchApplicationsSuccess,
  selectApplicationFailure,
} from "../../actions";
import { ExtractActionFromActionCreator } from "../../types";

function* onCreateCandidacy(
  action: ExtractActionFromActionCreator<typeof createCandidacy>
) {
  try {
    yield axios.post("/api/candidacy", action.payload);

    yield put(createCandidacySuccess());
  } catch (error) {
    yield put(createCandidacyFailure(error));
  }
}

export function* candidacy() {
  yield all([yield takeLatest("CREATE_CANDIDACY", onCreateCandidacy)]);
}
