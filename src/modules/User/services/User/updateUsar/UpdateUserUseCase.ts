import { PrismaClient } from "@prisma/client";

import { hash } from "bcrypt";
import { response } from "express";
import AppError from "../../../../../utils/errors/AppError";

interface IUpdate {
  id: number;
  name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  cpf?: string;
  type?: string;
  phone?: string;
}

const prisma = new PrismaClient();

export class UpdateUserControllerUserUseCase {
  async execute(bodyData: IUpdate) {
    //Validar se usuario existe
    const clientExist = await prisma.user.findFirst({
      where: {
        id: bodyData.id,
      },
    });

    if (!clientExist) {
      throw new AppError("user dont exists", 401);
    }
    //Croptografar senha
    const hashPassword = bodyData.password
      ? await hash(bodyData.password, 10)
      : clientExist.password;

    const data = {
      name: bodyData.name,
      email: bodyData.email,
      last_name: bodyData.last_name,
      cpf: bodyData.cpf,
      phone: bodyData.phone,
      type: bodyData.type,
      password: hashPassword,
    };

    //Salvar client
    const client = await prisma.user.update({
      where: { id: bodyData.id },
      data,
    });

    const responseClient = {
      id: client.id,
      name: client.name + " " + client.last_name,
      email: client.email,
    };

    return responseClient;
  }
}
