import { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from "@prisma/client";
import { testInterfaceD } from "../../interfaces/testInterface";
const prisma = new PrismaClient();

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
        reply.badRequest("Unknow Error");
      }
    }
  );
};

export default example;
