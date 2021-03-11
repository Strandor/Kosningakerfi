export interface IApplications {
  id: string;
  name: string;
  description?: string;
  minNumApplicants: number;
  maxNumApplicants: number;
  isAccepting: boolean;
}
