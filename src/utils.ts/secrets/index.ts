const exitProcess = (message: string) => {
  console.log(message);
  process.exit(1);
};

export const DB_CONNECTION_URL = "postgres://postgres@localhost:5432/postgres";
if (!DB_CONNECTION_URL) exitProcess("Missing DB_CONNECTION_URL");
