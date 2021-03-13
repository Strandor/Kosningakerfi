import { joinRouters } from "../../../utils";
import readAll from "./readAll";

export default joinRouters([
  {
    path: "/",
    method: "get",
    route: readAll,
  },
]);
