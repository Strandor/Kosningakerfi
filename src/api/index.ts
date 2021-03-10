import applications from "./applications";
import candidacy from "./candidacy";
import { joinRouters } from "./utils";

export default joinRouters([
  {
    path: "/applications",
    route: applications,
  },
  {
    path: "/candidacy",
    route: candidacy,
  },
]);

export * from "./utils";
export * from "./interface";
