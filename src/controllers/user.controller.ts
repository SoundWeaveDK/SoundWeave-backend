import { FastifyRequest, FastifyReply } from "fastify"

export default class UserController {

    public async registerUser(request: FastifyRequest<{}>, reply: FastifyReply) {
        try {
            //const user await = serviceFunction
            //return reply.code(201).header('Content-Type', 'application/json; charset=utf-8').send(user)
        } catch (error) {
            if (error instanceof Error) {
                return reply.badRequest(error.message);
            }
            throw error;
        }

    }

}