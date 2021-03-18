import { all, fork } from "redux-saga/effects";
import { candidacy } from "./candidacy";
import { applications } from "./applications";
import { users } from "./users";
import { votingKeys } from "./votingKeys";
import { announcements } from "./announcements";

export default function* rootSaga() {
  yield all([
    yield fork(applications),
    yield fork(candidacy),
    yield fork(users),
    yield fork(votingKeys),
    yield fork(announcements),
  ]);
}
