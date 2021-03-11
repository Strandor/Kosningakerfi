import { joinRouters } from "../utils";
import authenticate from "./authenticate";

export default joinRouters([
    {
        method: "post",
        route: authenticate,
        path: "/authenticate",
    },
]);
