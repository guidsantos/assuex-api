import { PrismaClient } from "@prisma/client";
import e from "express";

import AppError from "../../../../../utils/errors/AppError";

interface IUpdatePassager {
  bith_date?: string;
  cep?: string;
  address?: string;
  number?: number;
  complement?: string;
  bairro?: string;
  cidade?: string;
  linha_interesse?: string;
  start_point?: number;
  end_point?: number;
  back_point?: number;
  finish_point?: number;
  id: number;
}

const prisma = new PrismaClient();

export class UpdatePassagerUseCase {
  async execute(data: IUpdatePassager) {
    //Validar se passageiro existe
    const passagerExist = await prisma.passager.findFirst({
      where: {
        id: data.id,
      },
    });

    if (!passagerExist) {
      throw new AppError("passager don't exists", 401);
    }

    let arrPoints = [
      data.start_point || 0,
      data.end_point || 0,
      data.back_point || 0,
      data.finish_point || 0,
    ];

    arrPoints = arrPoints.filter((e) => {
      return e !== 0;
    });

    const pointsExists = await prisma.lineStopPoints.findMany({
      where: {
        id: { in: arrPoints },
      },
    });

    if (arrPoints.length !== pointsExists.length) {
      throw new AppError("point don't exists", 401);
    }

    if (new Set(arrPoints).size !== arrPoints.length) {
      throw new AppError("point are duplicates", 401);
    }

    const formatData = {
      bith_date: !!data.bith_date ? new Date(data.bith_date) : undefined,
      cep: data.cep,
      address: data.address,
      number: data.number,
      complement: data.complement,
      bairro: data.bairro,
      cidade: data.cidade,
      linha_interesse: data.linha_interesse,
      start_point: data.start_point,
      end_point: data.end_point,
      back_point: data.back_point,
      finish_point: data.finish_point,
    };

    //Atualizar passageiro
    const passager = await prisma.passager.update({
      where: {
        id: data.id,
      },
      data: formatData,
    });

    return passager;
  }
}
