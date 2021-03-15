import { joinRouters } from "../../utils";
import users from "./users";
import candidacy from "./candidacy";
import votingkeys from "./votingkeys";

export default joinRouters([
    {
        route: users,
        path: "/users",
    },
    {
        route: candidacy,
        path: "/candidacy",
    },
    {
        route: votingkeys,
        path: "/voting-keys",
    },
]);
