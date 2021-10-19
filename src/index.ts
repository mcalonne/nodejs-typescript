import LOGGER from './helpers/logger';
import { startServer } from "./server";

(async () => {
    // launch hapi server
    await startServer();
    LOGGER.info(`NodeJS application is running...`);
  })();

