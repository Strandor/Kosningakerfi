import { IApplications, ICandidacy } from "../../../models/";

export interface CandidacyState {
  loading: boolean;
  success: boolean;
  candidacies: IApplications[];
}
