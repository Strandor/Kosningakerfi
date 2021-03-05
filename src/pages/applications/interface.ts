import { ApplicationsState, fetchApplications } from "../../redux";

export interface IProps {
  applications: ApplicationsState;
  fetchApplications: typeof fetchApplications;
}
