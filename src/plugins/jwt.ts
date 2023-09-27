import fp from 'fastify-plugin'
import { fastifyJwt } from '@fastify/jwt';

/**
 * This is jwt authentication
 *
 * @see https://github.com/fastify/fastify-jwt
 */


export default fp(async (fastify) => {
  fastify.register(fastifyJwt, {
    secret: fastify.config.SECRET
  });
})
