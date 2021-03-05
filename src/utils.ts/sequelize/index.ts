import { Sequelize } from "sequelize";
import { DB_CONNECTION_URL } from "../secrets";

export const sequelizeInstance = new Sequelize(DB_CONNECTION_URL, {
  logging: false,
});
sequelizeInstance
  .authenticate()
  .then(() => console.log("Connection to Postgres DB works"))
  .catch(() => console.log("Failed conencting to Postgres DB"));
sequelizeInstance.sync();
