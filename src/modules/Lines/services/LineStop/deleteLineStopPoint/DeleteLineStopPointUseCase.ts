import { PrismaClient } from "@prisma/client";

import AppError from "../../../../../utils/errors/AppError";

interface IDeleteLineStopPoint {
  id: number;
}

const prisma = new PrismaClient();

export class DeleteLineStopPointUseCase {
  async execute(data: IDeleteLineStopPoint) {
    const lineStopPointExist = await prisma.lineStopPoints.findFirst({
      where: {
        id: data.id,
      },
    });

    if (!lineStopPointExist) {
      throw new AppError("line stop point dont exists", 401);
    }

    const stopPoint = await prisma.lineStopPoints.delete({
      where: { id: data.id },
    });

    return stopPoint;
  }
}
