import express from "express";
import next from "next";
import api from "./api";
import bodyParser from "body-parser";

export const isDev = process.env.NODE_ENV !== "production";
const port = isDev ? 3000 : 80;

const app = next({ isDev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(bodyParser.json({ limit: "50mb" }));
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use("/api", api);

    server.all("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(port);
    console.log("Listening on port " + port);
});
