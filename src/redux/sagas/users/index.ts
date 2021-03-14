import axios from "axios";
import Router from "next/router";
import { all, put, takeLatest } from "redux-saga/effects";
import { IUsers } from "../../../models/users/interface";
import {
  authenticate,
  authenticateFailure,
  authenticateSuccess,
  createAlert,
  createUser,
  createUsersFailure,
  createUserSuccess,
  deleteUser,
  deleteUserFailure,
  deleteUserSuccess,
  fetchUsersFailure,
  fetchUsersSuccess,
} from "../../actions";
import { ExtractActionFromActionCreator } from "../../types";

function* onAuthenticate(
  action: ExtractActionFromActionCreator<typeof authenticate>
) {
  try {
    const res = yield axios.post<IUsers>(
      "/api/auth/authenticate",
      action.payload
    );

    yield put(authenticateSuccess(res.data));
  } catch (error) {
    yield put(authenticateFailure(error));
  }
}

function* onAuthenticateSuccess() {
  yield Router.push("/admins/candidacy");
}

function* onAuthenticateFailure(
  error: ExtractActionFromActionCreator<typeof authenticateFailure>
) {
  yield put(
    createAlert(error.error.response.data.message ?? error.error.message)
  );
}

function* onFetchUsers() {
  try {
    const res = yield axios.get("/api/admins/users");

    yield put(fetchUsersSuccess(res.data));
  } catch (error) {
    yield put(fetchUsersFailure(error));
  }
}

function* onFetchUsersFailure(
  error: ExtractActionFromActionCreator<typeof fetchUsersFailure>
) {
  yield put(
    createAlert(error.error.response.data.message ?? error.error.message)
  );
}

function* onCreateUser(
  action: ExtractActionFromActionCreator<typeof createUser>
) {
  try {
    const res = yield axios.post<IUsers>("/api/admins/users", action.payload);

    yield put(createUserSuccess(res.data));
  } catch (error) {
    yield put(createUsersFailure(error));
  }
}

function* onCreateUserFailure(
  error: ExtractActionFromActionCreator<typeof createUsersFailure>
) {
  yield put(
    createAlert(error.error.response.data.message ?? error.error.message)
  );
}

function* onDeleteUser(
  action: ExtractActionFromActionCreator<typeof deleteUser>
) {
  try {
    const res = yield axios.delete<IUsers>(
      `/api/admins/users/${action.payload}`
    );

    yield put(deleteUserSuccess(res.data));
  } catch (error) {
    yield put(deleteUserFailure(error));
  }
}

function* onDeleteUserFailure(
  error: ExtractActionFromActionCreator<typeof deleteUserFailure>
) {
  yield put(
    createAlert(error.error.response.data.message ?? error.error.message)
  );
}

export function* users() {
  yield all([
    yield takeLatest("AUTHENTICATE", onAuthenticate),
    yield takeLatest("AUTHENTICATE_SUCCESS", onAuthenticateSuccess),
    yield takeLatest("AUTHENTICATE_FAILURE", onAuthenticateFailure),
    yield takeLatest("FETCH_USERS", onFetchUsers),
    yield takeLatest("FETCH_USERS_FAILURE", onFetchUsersFailure),
    yield takeLatest("CREATE_USER", onCreateUser),
    yield takeLatest("CREATE_USER_FAILURE", onCreateUserFailure),
    yield takeLatest("DELETE_USER", onDeleteUser),
    yield takeLatest("DELETE_USER_FAILURE", onDeleteUserFailure),
  ]);
}
