import applications from "./applications";
import candidacy from "./candidacy";
import users from "./users";
import auth from "./auth";
import { joinRouters } from "../utils";
import { fetchAuth } from "..";

export default joinRouters([
  {
    path: "/auth",
    route: auth,
  },
  {
    path: "/applications",
    route: applications,
  },
  {
    path: "/candidacy",
    route: candidacy,
  },
  {
    path: "/users",
    route: users,
    middlewares: [fetchAuth],
  },
]);

export * from "../utils";
export * from "../interface";
