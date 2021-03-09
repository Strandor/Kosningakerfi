import { all, fork } from "redux-saga/effects";
import { candidacy } from "./candidacy";
import { applications } from "./applications";

export default function* rootSaga() {
  yield all([yield fork(applications), yield fork(candidacy)]);
}
