import { UsersState } from "./interface";

export const initialState: UsersState = {
  isLoggedIn: false,
  loading: false,
  user: undefined,
  users: [],
};
