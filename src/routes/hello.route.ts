import { Plugin} from '@hapi/hapi';
import Joi from 'joi';
import { sayHello } from '../controllers/hello.controller';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PluginOptions {}

export const helloRoutes: Plugin<PluginOptions> = {
  name: "Hello Routes",
  register: async (server: any) => {
    server.route({
      method: "GET",
      path: "/hello",
      handler: sayHello,
      options: {
        response: {
          schema: Joi.string().required(),
        },
        description: "Test Hapi integration",
        notes: "This route just returns an helloWorld message",
        tags: ["api"],
      },
    });
  },
};
