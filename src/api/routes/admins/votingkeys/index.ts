import { joinRouters } from "../../../utils";
import create from "./create";
import readAll from "./readAll";

export default joinRouters([
    {
        method: "get",
        route: readAll,
        path: "/",
    },
    {
        method: "post",
        route: create,
        path: "/",
    },
]);
