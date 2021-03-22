import { IApplications, IVoting } from "../../../models";
import { IVotingKeys } from "../../../models/votingKeys/interface";
import { createAction, createErrorAction } from "../../helpers";
import { GenericError } from "../../types";
import { ICreateVotingKeys, IFetchVoting } from "./interface";

export enum VotingActions {
	FETCH_VOTING = "FETCH_VOTING",
	FETCH_VOTING_SUCCESS = "FETCH_VOTING_SUCCESS",
	FETCH_VOTING_FAILURE = "FETCH_VOTING_FAILURE",

	FETCH_VOTING_KEYS = "FETCH_VOTING_KEYS",
	FETCH_VOTING_KEYS_SUCCESS = "FETCH_VOTING_KEYS_SUCCESS",
	FETCH_VOTING_KEYS_FAILURE = "FETCH_VOTING_KEYS_FAILURE",

	CREATE_VOTING_KEY = "CREATE_VOTING_KEY",
	CREATE_VOTING_KEY_SUCCESS = "CREATE_VOTING_KEY_SUCCESS",
	CREATE_VOTING_KEY_FAILURE = "CREATE_VOTING_KEY_FAILURE",

	ADD_VOTE = "ADD_VOTE",
	REMOVE_VOTE = "REMOVE_VOTE",

	SUBMIT_VOTES = "SUBMIT_VOTES",
	SUBMIT_VOTES_SUCCESS = "SUBMIT_VOTES_SUCCESS",
	SUBMIT_VOTES_FAILURE = "SUBMIT_VOTES_FAILURE",
}

export function fetchVoting(payload: IFetchVoting) {
	return createAction(VotingActions.FETCH_VOTING, payload);
}

export function fetchVotingSuccess(payload: IVoting) {
	return createAction(VotingActions.FETCH_VOTING_SUCCESS, payload);
}

export function fetchVotingFailure<E extends GenericError>(error: E) {
	return createErrorAction(VotingActions.FETCH_VOTING_FAILURE, error);
}

export function fetchVotingKeys() {
	return createAction(VotingActions.FETCH_VOTING_KEYS);
}

export function fetchVotingKeysSuccess(payload: IVotingKeys[]) {
	return createAction(VotingActions.FETCH_VOTING_KEYS_SUCCESS, payload);
}

export function fetchVotingKeysFailure<E extends GenericError>(error: E) {
	return createErrorAction(VotingActions.FETCH_VOTING_KEYS_FAILURE, error);
}

export function createVotingKey(payload: ICreateVotingKeys) {
	return createAction(VotingActions.CREATE_VOTING_KEY, payload);
}

export function createVotingKeySuccess(payload: IVotingKeys) {
	return createAction(VotingActions.CREATE_VOTING_KEY_SUCCESS, payload);
}

export function createVotingKeyFailure<E extends GenericError>(error: E) {
	return createErrorAction(VotingActions.CREATE_VOTING_KEY_FAILURE, error);
}

export function addVote(payload: string) {
	return createAction(VotingActions.ADD_VOTE, payload);
}

export function removeVote(payload: string) {
	return createAction(VotingActions.REMOVE_VOTE, payload);
}

export function submitVotes() {
	return createAction(VotingActions.SUBMIT_VOTES);
}

export function submitVotesSuccess() {
	return createAction(VotingActions.SUBMIT_VOTES_SUCCESS);
}

export function submitVotesFailure<E extends GenericError>(error: E) {
	return createErrorAction(VotingActions.SUBMIT_VOTES_FAILURE, error);
}
