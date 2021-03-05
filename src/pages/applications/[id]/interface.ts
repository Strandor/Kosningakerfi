import { ApplicationsState, selectApplication } from "../../../redux";

export interface IProps {
  applications: ApplicationsState;
  selectApplication: typeof selectApplication;
}
