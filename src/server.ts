import express from "express";
import next from "next";
import { routes } from "./api";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

export const isDev = process.env.NODE_ENV !== "production";
const port = isDev ? 3000 : 80;

const app = next({ dev: isDev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(cookieParser());
  server.use(bodyParser.json({ limit: "50mb" }));
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use("/api", routes);

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port);
  console.log("Listening on port " + port);
});
