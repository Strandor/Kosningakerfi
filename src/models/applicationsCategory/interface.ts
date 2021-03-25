import { IApplications } from "../appplications";

export interface IApplicationsCategory {
	id: string;
	name: string;
	applications?: IApplications[];
	listOrder: number;
}
