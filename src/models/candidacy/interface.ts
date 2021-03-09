import { ICandidats } from "../candidats/interface";

export interface ICandidacy {
  id: string;
  name: string;
  description: string;
  image?: string;
  applicationId: string;
  candidats?: ICandidats[];
}
