import { combineReducers } from "redux";
import { AppReducer } from "./app";
import { ApplicationsReducer } from "./applications";
import { CandidacyReducer } from "./candidacy";

export const rootReducer = combineReducers({
  applications: ApplicationsReducer,
  candidacy: CandidacyReducer,
  app: AppReducer,
});

export default rootReducer;
export type StoreState = ReturnType<typeof rootReducer>;
export * from "./applications";
export * from "./candidacy";
export * from "./app";
