import { Request, Response, NextFunction, Router } from "express";

export type Method = "get" | "post" | "delete";

type Route = (req: Request, res: Response) => Promise<void>;

type RouteMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

export interface IRoute {
  method?: Method;
  path: string;
  route: Route | Router;
  middlewares?: RouteMiddleware[];
}
