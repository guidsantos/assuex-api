import { PrismaClient } from "@prisma/client";

import { hash } from "bcrypt";
import AppError from "../../../../utils/errors/AppError";

interface ICreateClient {
  email: string;
  password: string;
}

const prisma = new PrismaClient();

export class CreateUserUseCase {
  async execute({ email, password }: ICreateClient) {
    //Validar se usuario existe
    const clientExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (clientExist) {
      throw new AppError("user already exists", 401);
    }
    //Croptografar senha
    const hashPassword = await hash(password, 10);

    //Salvar client
    const client = await prisma.user.create({
      data: {
        email,
        password: hashPassword,
      },
    });

    return client;
  }
}
