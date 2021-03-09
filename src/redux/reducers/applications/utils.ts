import { ApplicationsState } from "./interface";

export const initialState: ApplicationsState = {
  applications: [],
  isLoading: false,
  selected: undefined,
};
