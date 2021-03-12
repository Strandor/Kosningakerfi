import { joinRouters } from "../../utils";
import readAll from "./readAll";
import readById from "./readById";

export default joinRouters([
  {
    method: "get",
    path: "/",
    route: readAll,
  },
  {
    method: "get",
    path: "/:id",
    route: readById,
  },
]);
