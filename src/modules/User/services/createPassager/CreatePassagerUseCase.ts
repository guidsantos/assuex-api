import { PrismaClient } from "@prisma/client";

import AppError from "../../../../utils/errors/AppError";

interface ICreatePassager {
  bith_date: string;
  cep: string;
  address: string;
  number: number;
  complement: string;
  bairro: string;
  cidade: string;
  linha_interesse: string;
  start_date: string;
  start_point?: number;
  end_point?: number;
  back_point?: number;
  finish_point?: number;
  userId: number;
}

const prisma = new PrismaClient();

export class CreatePassagerUseCase {
  async execute({
    bith_date,
    cep,
    address,
    number,
    complement,
    bairro,
    cidade,
    linha_interesse,
    start_date,
    start_point,
    end_point,
    back_point,
    finish_point,
    userId,
  }: ICreatePassager) {
    //Validar se usuario existe
    const clientExist = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!clientExist) {
      throw new AppError("user don't exists", 401);
    }

    const formatData = {
      bith_date: new Date(bith_date),
      cep,
      address,
      number,
      complement,
      bairro,
      cidade,
      linha_interesse,
      start_date: new Date(start_date),
      start_point,
      end_point,
      back_point,
      finish_point,
      userId,
    };

    //Salvar client
    const client = await prisma.passager.create({
      data: formatData,
    });

    return client;
  }
}
