import { joinRouters } from "../../utils";
import create from "./create";

export default joinRouters([
  {
    method: "post",
    route: create,
    path: "/",
  },
]);
