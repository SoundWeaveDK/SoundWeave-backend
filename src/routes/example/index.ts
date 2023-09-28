import { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import testInterfaceD from "../../interfaces/testInterface";
import prisma from "../../utils/ormConnection";

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post(
    "/",
    async function (
      request: FastifyRequest<{ Body: testInterfaceD }>,
      reply: FastifyReply
    ) {
      const { name, email } = request.body;
      const token = fastify.jwt.sign({ email })
      try {
        const user = await prisma.user.create({
          data: {
            email: email,
            name: name,
          },
        })
        reply.send({ token, user })
      } catch (error) {
        if (error instanceof Error) {
          return reply.badRequest(error.message);
        }
        reply.badRequest("Unknown Error");
      }
    }
  );
};

export default example;
