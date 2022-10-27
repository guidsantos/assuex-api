import { PrismaClient } from "@prisma/client";

import { sign } from "jsonwebtoken";

import authConfig from "../../../../config/auth";

import { compare } from "bcrypt";
import AppError from "../../../../utils/errors/AppError";

interface ICreateClient {
  email: string;
  password: string;
}

const prisma = new PrismaClient();

export class AuthenticateUserUseCase {
  async execute({ email, password }: ICreateClient) {
    //Validar se usuario existe
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new AppError("user don't exists", 400);
    }
    //Croptografar senha
    const authenticate = compare(password, user.password);

    if (!authenticate) {
      throw new AppError("invalid login", 400);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn,
    });

    const responseUser = { name: user.name, email: user.email };

    return {
      responseUser,
      token,
    };
  }
}
