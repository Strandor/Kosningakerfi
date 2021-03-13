import { joinRouters } from "../../utils";
import readAll from "./readAll";
import removeUser from "./removeUser";
import createUser from "./createUser";

export default joinRouters([
  {
    method: "get",
    route: readAll,
    path: "/",
  },
  {
    method: "delete",
    route: removeUser,
    path: "/:id/",
  },
  {
    method: "post",
    route: createUser,
    path: "/",
  },
]);
