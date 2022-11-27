import { PrismaClient } from "@prisma/client";

import AppError from "../../../../../utils/errors/AppError";

interface ICreateStopPoint {
  stopPointId: number;
  lineId: number;
  stop_time: string;
}

const prisma = new PrismaClient();

export class CreateLineStopPointUseCase {
  async execute(data: ICreateStopPoint) {
    //Validar se a ponto de parada existe
    const stopPointExist = await prisma.stopPoint.findFirst({
      where: {
        id: data.stopPointId,
      },
    });

    //Validar se a ponto de parada existe
    const lineExist = await prisma.line.findFirst({
      where: {
        id: data.lineId,
      },
    });

    if (!stopPointExist) {
      throw new AppError("stop point dont exists", 401);
    }

    if (!lineExist) {
      throw new AppError("line dont exists", 401);
    }

    const lineStopPointExist = await prisma.lineStopPoints.findFirst({
      where: {
        lineId: data.lineId,
        stopPointId: data.stopPointId,
        stop_time: data.stop_time
      },
    });

    if(lineStopPointExist){
      throw new AppError("line stop already exists", 401);
    }

    //Salvar ponto de parada
    const stopPoint = await prisma.lineStopPoints.create({
      data,
    });

    return stopPoint;
  }
}
