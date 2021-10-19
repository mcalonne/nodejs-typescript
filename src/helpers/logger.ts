import pino from "pino";
import envConfig from "../config";

export default pino({
  name: envConfig.logger.name,
  level: envConfig.logger.level,
});
