import { PrismaClient } from "@prisma/client";

import AppError from "../../../../utils/errors/AppError";

interface ICreateStopPoint {
  address: string;
  reference?: string;
}

const prisma = new PrismaClient();

export class CreateStopPointUseCase {
  async execute(data: ICreateStopPoint) {
    //Validar se a ponto de parada existe
    const stopPointExist = await prisma.stopPoint.findFirst({
      where: {
        address: data.address,
      },
    });

    if (stopPointExist) {
      throw new AppError("stop point already exists", 401);
    }

    //Salvar ponto de parada
    const stopPoint = await prisma.stopPoint.create({
      data,
    });

    return stopPoint;
  }
}
