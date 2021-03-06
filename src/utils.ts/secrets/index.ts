const exitProcess = (message: string) => {
  console.log(message);
  process.exit(1);
};

export const DB_CONNECTION_URL: string = process.env["DB_CONNECTION_URL"];
if (!DB_CONNECTION_URL) exitProcess("Missing DB_CONNECTION_URL");
