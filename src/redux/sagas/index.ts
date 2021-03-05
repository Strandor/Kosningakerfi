import { all, fork } from "redux-saga/effects";
import { applications } from "./applications";

export default function* rootSaga() {
  yield all([yield fork(applications)]);
}
