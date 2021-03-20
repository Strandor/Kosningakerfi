import axios from "axios";
import { all, put, takeLatest } from "redux-saga/effects";
import { IVoting, IVotingKeys } from "../../../models";
import {
	createAlert,
	createVotingKey,
	createVotingKeyFailure,
	createVotingKeySuccess,
	fetchVoting,
	fetchVotingFailure,
	fetchVotingKeysFailure,
	fetchVotingKeysSuccess,
	fetchVotingSuccess,
} from "../../actions";
import { ExtractActionFromActionCreator } from "../../types";

function* onFetchVotingKeys() {
	try {
		const res = yield axios.get<IVotingKeys[]>(`/api/admins/voting-keys`);

		yield put(fetchVotingKeysSuccess(res.data));
	} catch (error) {
		yield put(fetchVotingKeysFailure(error));
	}
}

function* onFetchVotingKeysFailure(
	error: ExtractActionFromActionCreator<typeof fetchVotingKeysFailure>
) {
	yield put(
		createAlert(error.error.response.data.message ?? error.error.message)
	);
}

function* onCreateVotingKey(
	action: ExtractActionFromActionCreator<typeof createVotingKey>
) {
	try {
		const res = yield axios.post<IVotingKeys>(
			`/api/admins/voting-keys`,
			action.payload
		);

		yield put(createVotingKeySuccess(res.data));
	} catch (error) {
		yield put(createVotingKeyFailure(error));
	}
}

function* onCreateVotingKeyFailure(
	error: ExtractActionFromActionCreator<typeof createVotingKeyFailure>
) {
	yield put(
		createAlert(error.error.response.data.message ?? error.error.message)
	);
}

function* onFetchVoting(
	action: ExtractActionFromActionCreator<typeof fetchVoting>
) {
	try {
		const res = yield axios.get<IVoting>(
			`/api/voting/${action.payload.votingKey}`
		);

		yield put(fetchVotingSuccess(res.data));
	} catch (error) {
		yield put(fetchVotingFailure(error));
	}
}

function* onFetchVotingFailure(
	error: ExtractActionFromActionCreator<typeof fetchVotingFailure>
) {
	yield put(
		createAlert(error.error.response.data.message ?? error.error.message)
	);
}

export function* votingKeys() {
	yield all([
		yield takeLatest("FETCH_VOTING_KEYS", onFetchVotingKeys),
		yield takeLatest("FETCH_VOTING_KEYS_FAILURE", onFetchVotingKeysFailure),
		yield takeLatest("CREATE_VOTING_KEY", onCreateVotingKey),
		yield takeLatest("CREATE_VOTING_KEY_FAILURE", onCreateVotingKeyFailure),
		yield takeLatest("FETCH_VOTING", onFetchVoting),
		yield takeLatest("FETCH_VOTING_FAILURE", onFetchVotingFailure),
	]);
}
