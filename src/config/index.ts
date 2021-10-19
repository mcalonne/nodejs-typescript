import * as dotenv from "dotenv";
dotenv.config();

const environnmentConfig = {
  server: {
    host: process.env.SERVER_HOST || "localhost",
    port: process.env.SERVER_PORT || 3007,
  },
  logger: {
    name: process.env.LOGGER_NAME || "nodejs-app",
    level: process.env.LOGGER_LEVEL || "info",
  }
};

export default environnmentConfig;