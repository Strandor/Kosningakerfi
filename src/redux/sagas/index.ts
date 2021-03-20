import { all, fork } from "redux-saga/effects";
import { candidacy } from "./candidacy";
import { applications } from "./applications";
import { users } from "./users";
import { votingKeys } from "./voting";
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
