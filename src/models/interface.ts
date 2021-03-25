import { IApplicationsCategory } from "./applicationsCategory";
import { IApplications } from "./appplications";
import { IVotingKeys } from "./votingKeys";

export interface IVoting {
	votingKey: IVotingKeys;
	applications: IApplicationsCategory[];
}
