import { joinRouters } from "../../utils";
import readById from "./readById";
import createVotes from "./createVotes";

export default joinRouters([
	{
		path: "/:id",
		method: "get",
		route: readById,
	},
	{
		path: "/:id",
		method: "post",
		route: createVotes,
	},
]);
