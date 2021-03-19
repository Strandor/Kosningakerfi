import { joinRouters } from "../../utils";
import readById from "./readById";

export default joinRouters([
  {
    path: "/:id",
    method: "get",
    route: readById,
  },
]);
