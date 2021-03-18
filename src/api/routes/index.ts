import applications from "./applications";
import candidacy from "./candidacy";
import admins from "./admins";
import auth from "./auth";
import { joinRouters } from "../utils";
import { fetchAuth } from "../middlewares";
import announcements from "./announcements";

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
    path: "/announcements",
    route: announcements,
  },
  {
    path: "/admins",
    route: admins,
    middlewares: [fetchAuth],
  },
]);

export * from "../utils";
export * from "../interface";
