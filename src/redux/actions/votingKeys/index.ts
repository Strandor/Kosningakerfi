import { IApplications } from "../../../models";
import { IVotingKeys } from "../../../models/votingKeys/interface";
import { createAction, createErrorAction } from "../../helpers";
import { GenericError } from "../../types";
import { ICreateVotingKeys } from "./interface";

export enum VotingKeysActions {
    FETCH_VOTING_KEYS = "FETCH_VOTING_KEYS",
    FETCH_VOTING_KEYS_SUCCESS = "FETCH_VOTING_KEYS_SUCCESS",
    FETCH_VOTING_KEYS_FAILURE = "FETCH_VOTING_KEYS_FAILURE",

    CREATE_VOTING_KEY = "CREATE_VOTING_KEY",
    CREATE_VOTING_KEY_SUCCESS = "CREATE_VOTING_KEY_SUCCESS",
    CREATE_VOTING_KEY_FAILURE = "CREATE_VOTING_KEY_FAILURE",
}

export function fetchVotingKeys() {
    return createAction(VotingKeysActions.FETCH_VOTING_KEYS);
}

export function fetchVotingKeysSuccess(payload: IVotingKeys[]) {
    return createAction(VotingKeysActions.FETCH_VOTING_KEYS_SUCCESS, payload);
}

export function fetchVotingKeysFailure<E extends GenericError>(error: E) {
    return createErrorAction(
        VotingKeysActions.FETCH_VOTING_KEYS_FAILURE,
        error
    );
}

export function createVotingKey(payload: ICreateVotingKeys) {
    return createAction(VotingKeysActions.CREATE_VOTING_KEY, payload);
}

export function createVotingKeySuccess(payload: IVotingKeys) {
    return createAction(VotingKeysActions.CREATE_VOTING_KEY_SUCCESS, payload);
}

export function createVotingKeyFailure<E extends GenericError>(error: E) {
    return createErrorAction(
        VotingKeysActions.CREATE_VOTING_KEY_FAILURE,
        error
    );
}
