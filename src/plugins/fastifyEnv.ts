import fp from 'fastify-plugin'
import { fastifyEnv } from "@fastify/env"

/**
 * This is fastify env config :)
 *
 * @see https://github.com/fastify/fastify-env
 */

declare module "fastify" {
    interface FastifyInstance {
        config: {
            SECRET: string;
        };
    }
}

export default fp(async (fastify) => {

    const schema = {
        type: 'object',
        required: ['SECRET'],
        properties: {
            SECRET: {
                type: 'string'
            }
        }
    }

    const options = { schema: schema }

    fastify.register(fastifyEnv, options)
})
