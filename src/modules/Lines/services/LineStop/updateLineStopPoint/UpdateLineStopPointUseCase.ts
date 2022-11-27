import { PrismaClient } from "@prisma/client";

import AppError from "../../../../../utils/errors/AppError";

interface IUpdateLineStopPoint {
  id: number;
  stopPointId: number;
  stop_time: string;
}

const prisma = new PrismaClient();

export class UpdateLineStopPointUseCase {
  async execute(data: IUpdateLineStopPoint) {
    const lineStopPointExist = await prisma.lineStopPoints.findFirst({
      where: {
        id: data.id,
      },
    });

    if (!lineStopPointExist) {
      throw new AppError("line stop point dont exists", 401);
    }

    const stopPointExists = await prisma.stopPoint.findFirst({
      where: {
        id: data.stopPointId,
      },
    });

    if (!stopPointExists) {
      throw new AppError("stop point dont exists", 401);
    }

    const stopPoint = await prisma.lineStopPoints.update({
      where: { id: data.id },
      data: {
        stop_time: data.stop_time,
        stopPointId: data.stopPointId
      },
    });

    return stopPoint;
  }
}
