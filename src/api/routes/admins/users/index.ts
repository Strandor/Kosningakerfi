import { joinRouters } from "../../../utils";
import readAll from "./readAll";
import removeUser from "./removeUser";
import createUser from "./createUser";
import currentUser from "./currentUser";

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
  {
    method: "get",
    route: currentUser,
    path: "/current",
  },
]);
