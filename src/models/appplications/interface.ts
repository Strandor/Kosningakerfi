import { ICandidacy } from "../candidacy";

export interface IApplications {
  id: string;
  name: string;
  description?: string;
  minNumApplicants: number;
  maxNumApplicants: number;
  maxVotes: number;
  isAccepting: boolean;
  isFramtidin: boolean;
  candidacies?: ICandidacy[];
}
