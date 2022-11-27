import { PrismaClient } from "@prisma/client";

import { hash } from "bcrypt";
import { response } from "express";
import AppError from "../../../../../utils/errors/AppError";

interface ICreateClient {
  name: string;
  last_name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
}

const prisma = new PrismaClient();

export class CreateUserUseCase {
  async execute(bodyData: ICreateClient) {
    //Validar se usuario existe
    const clientExist = await prisma.user.findFirst({
      where: {
        email: bodyData.email,
      },
    });

    if (clientExist) {
      throw new AppError("user already exists", 401);
    }
    //Croptografar senha
    const hashPassword = await hash(bodyData.password, 10);

    const data = {
      name: bodyData.name,
      email: bodyData.email,
      last_name: bodyData.last_name,
      cpf: bodyData.cpf,
      phone: bodyData.phone,
      password: hashPassword,
    };

    //Salvar client
    const client = await prisma.user.create({
      data,
    });

    const responseClient = {
      id: client.id,
      name: client.name+" "+client.last_name,
      email: client.email,
    };

    return responseClient;
  }
}
