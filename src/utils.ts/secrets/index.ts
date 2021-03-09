import dotenv from "dotenv";
dotenv.config();

if (!process.env["DB_CONNECTION_URL"]) process.exit(1);
export const DB_CONNECTION_URL = process.env["DB_CONNECTION_URL"];

if (!process.env["AWS_SECRET_ACCESS_KEY"]) process.exit(1);
export const AWS_SECRET_ACCESS_KEY = process.env["AWS_SECRET_ACCESS_KEY"];

if (!process.env["AWS_ACCESS_KEY"]) process.exit(1);
export const AWS_ACCESS_KEY = process.env["AWS_ACCESS_KEY"];

if (!process.env["AWS_REGION"]) process.exit(1);
export const AWS_REGION = process.env["AWS_REGION"];
