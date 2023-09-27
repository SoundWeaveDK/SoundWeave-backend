import { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from '@prisma/client';
import { testInterfaceD } from "../../interfaces/testInterface";
const prisma = new PrismaClient()

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", async function (request: FastifyRequest<{ Body: testInterfaceD }>, reply: FastifyReply) {
    const { name, email } = request.body;
    const user = await prisma.user.create({
      data: {
        email: email,
        name: name
      },
    })
    reply.send(user);
  });
};

export default example;
