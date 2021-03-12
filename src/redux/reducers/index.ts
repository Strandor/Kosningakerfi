import { combineReducers } from "redux";
import { AppReducer } from "./app";
import { ApplicationsReducer } from "./applications";
import { CandidacyReducer } from "./candidacy";
import { UsersReducer } from "./users";

export const rootReducer = combineReducers({
  applications: ApplicationsReducer,
  candidacy: CandidacyReducer,
  app: AppReducer,
  users: UsersReducer,
});

export default rootReducer;
export type StoreState = ReturnType<typeof rootReducer>;
export * from "./applications";
export * from "./candidacy";
export * from "./app";
export * from "./users";
