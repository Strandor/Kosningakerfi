import { combineReducers } from "redux";
import { ApplicationsReducer } from "./applications";

export const rootReducer = combineReducers({
  applications: ApplicationsReducer,
});

export default rootReducer;
export type StoreState = ReturnType<typeof rootReducer>;
export * from "./applications";
