import { AppState, closeAlert } from "../../../redux";

export interface IProps {
  app: AppState;
  closeAlert: typeof closeAlert;
}
