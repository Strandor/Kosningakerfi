import axios, { AxiosResponse } from "axios";
import { Router, useRouter } from "next/router";
import { all, put, takeLatest } from "redux-saga/effects";
import {
  ApplicationsActions,
  selectApplication,
  selectApplicationSuccess,
} from "../..";
import { IApplications } from "../../../models";
import {
  createAlert,
  createCandidacy,
  createCandidacyFailure,
  createCandidacySuccess,
  fetchApplicationsFailure,
  fetchApplicationsSuccess,
  fetchCandidaciesFailure,
  fetchCandidaciesSuccess,
  selectApplicationFailure,
} from "../../actions";
import { ExtractActionFromActionCreator, GenericError } from "../../types";

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

function* onCreateCandiacyFailure(
  error: ExtractActionFromActionCreator<typeof createCandidacyFailure>
) {
  yield put(
    createAlert(error.error.response.data.message ?? error.error.message)
  );
}

function* onFetchCandidacy() {
  try {
    const res = yield axios.get("/api/admins/candidacy");

    yield put(fetchCandidaciesSuccess(res.data));
  } catch (error) {
    yield put(fetchCandidaciesFailure(error));
  }
}

function* onFetchCandidacyFailure(
  error: ExtractActionFromActionCreator<typeof fetchCandidaciesFailure>
) {
  yield put(
    createAlert(error.error.response.data.message ?? error.error.message)
  );
}

export function* candidacy() {
  yield all([
    yield takeLatest("CREATE_CANDIDACY", onCreateCandidacy),
    yield takeLatest("CREATE_CANDIDACY_FAILURE", onCreateCandiacyFailure),
    yield takeLatest("FETCH_CANDIDACIES", onFetchCandidacy),
    yield takeLatest("FETCH_CANDIDACIES_FAILURE", onFetchCandidacyFailure),
  ]);
}
