import { IRoute } from "./interface";
import { Router } from "express";

export const joinRouters = (routes: IRoute[]) => {
  const router = Router();

  routes.forEach((route) => {
    if (route.method) {
      if (route.middlewares)
        router[route.method](route.path, route.middlewares, route.route);
      else router[route.method](route.path, route.route);
    } else {
      if (route.middlewares)
        router.use(route.path, route.middlewares, route.route);
      else router.use(route.path, route.route);
    }
  });
  return router;
};
