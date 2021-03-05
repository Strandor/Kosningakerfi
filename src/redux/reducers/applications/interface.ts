import { IApplications, IApplicationsCategory } from "../../../models";

export interface ApplicationsState {
  applications: IApplicationsCategory[];
  selected?: IApplicationsCategory;
  isLoading: boolean;
}
