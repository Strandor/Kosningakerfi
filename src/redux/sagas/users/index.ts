import axios from "axios";
import { all, put, takeLatest } from "redux-saga/effects";
import { IUsers } from "../../../models/users/interface";
import {
  authenticate,
  authenticateFailure,
  authenticateSuccess,
  createAlert,
} from "../../actions";
import { ExtractActionFromActionCreator } from "../../types";

function* onAuthenticate(
  action: ExtractActionFromActionCreator<typeof authenticate>
) {
  try {
    const res = yield axios.post<IUsers>(
      "/api/users/authenticate",
      action.payload
    );

    yield put(authenticateSuccess(res.data));
  } catch (error) {
    yield put(authenticateFailure(error));
  }
}

function* onAuthenticateFailure(
  error: ExtractActionFromActionCreator<typeof authenticateFailure>
) {
  yield put(
    createAlert(error.error.response.data.message ?? error.error.message)
  );
}

export function* users() {
  yield all([
    yield takeLatest("AUTHENTICATE", onAuthenticate),
    yield takeLatest("AUTHENTICATE_FAILURE", onAuthenticateFailure),
  ]);
}
