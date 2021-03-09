import { combineReducers } from "redux";
import { ApplicationsReducer } from "./applications";
import { CandidacyReducer } from "./candidacy";

export const rootReducer = combineReducers({
  applications: ApplicationsReducer,
  candidacy: CandidacyReducer,
});

export default rootReducer;
export type StoreState = ReturnType<typeof rootReducer>;
export * from "./applications";
export * from "./candidacy";
