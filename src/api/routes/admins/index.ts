import { joinRouters } from "../../utils";
import users from "./users";
import candidacy from "./candidacy";

export default joinRouters([
  {
    route: users,
    path: "/users",
  },
  {
    route: candidacy,
    path: "/candidacy",
  },
]);
