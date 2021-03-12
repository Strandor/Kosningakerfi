import { IUsers } from "../../../models/users/interface";

export interface UsersState {
  loading: boolean;
  isLoggedIn: boolean;
  user?: IUsers;
}
