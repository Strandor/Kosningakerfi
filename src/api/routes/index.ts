import applications from "./applications";
import candidacy from "./candidacy";
import admins from "./admins";
import auth from "./auth";
import { joinRouters } from "../utils";
import { fetchAuth } from "../middlewares";

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
    path: "/admins",
    route: admins,
    middlewares: [fetchAuth],
  },
]);

export * from "../utils";
export * from "../interface";
