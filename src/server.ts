import Hapi from '@hapi/hapi';
import Vision from '@hapi/vision';
import Inert from '@hapi/inert';
import * as HapiSwagger from "hapi-swagger"; 
import config from './config/index';
import LOGGER from './helpers/logger';

// Hapi Routes
import { helloRoutes } from './routes/hello.route';

export const startServer = async (): Promise<void> => {
    // Configure server
    const server = Hapi.server({
      host: config.server.host,
      port: config.server.port,
      routes: {
        cors: {
          origin: ["*"],
          credentials: true,
        },
      },
    });

    const swaggerOptions = {
        info: {
          title: "API Documentation",
          version: "0.0.1",
        },
        tags: [
          {
            name: "hello",
            description: "Test the Hapi integration by returning an helloWorld message",
          }
        ],
      };

    // Plugins to generate a swagger documentation
  const plugins: Array<Hapi.ServerRegisterPluginObject<any>> = [
    {
      plugin: Inert,
    },
    {
      plugin: Vision,
    },
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ];

  await server.register(plugins);

  // Register all routes to serve
  await server.register(helloRoutes);

  // Register pino to trace all hapi requests
  await server.register({
    plugin: require("hapi-pino"),
  });

  // Start the server
  await server.start();
  LOGGER.info(`Server is running at: ${server.info.uri}`);
}