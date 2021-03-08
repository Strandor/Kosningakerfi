import { IApplications, IApplicationsCategory } from "../../../models";

export interface ApplicationsState {
  applications: IApplicationsCategory[];
  selected?: IApplications;
  isLoading: boolean;
}
