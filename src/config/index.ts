import { config } from "dotenv";
import { resolve } from "path";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const dotenvFileName =
  process.env.NODE_ENV === "development"
    ? ".env.dev"
    : process.env.NODE_ENV === "test"
    ? ".env.test"
    : ".env";

const dotenvConfigOutput = config({
  path: resolve(__dirname, dotenvFileName),
});

if (dotenvConfigOutput.error) {
  throw new Error(`⚠️ Missing ${dotenvFileName}; Exiting ⚠️`);
}

export const expressConfig = {
  port: parseInt(process.env.EXPRESS_PORT) || 8080,
  host: process.env.EXPRESS_HOST || "127.0.0.1",
};

export const mongoConfig = {
  mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/covid-api",
};

export default {
  expressConfig: expressConfig,
  mongoConfig: mongoConfig,
};
