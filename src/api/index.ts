import applications from "./applications";
import candidacy from "./candidacy";
import users from "./users";
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
    {
        path: "/users",
        route: users,
    },
]);

export * from "./utils";
export * from "./interface";
