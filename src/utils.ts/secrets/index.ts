import dotenv from "dotenv";
dotenv.config();

if (!process.env["DB_CONNECTION_URL"]) process.exit(1);
export const DB_CONNECTION_URL = process.env["DB_CONNECTION_URL"];
