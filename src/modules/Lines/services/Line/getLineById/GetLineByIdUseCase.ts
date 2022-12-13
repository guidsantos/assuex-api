import { PrismaClient } from "@prisma/client";
import AppError from "../../../../../utils/errors/AppError";

const prisma = new PrismaClient();

export interface IGetLineById {
  id: number;
}

export class GetLineByIdUseCase {
  async execute(params: IGetLineById) {
    //Get all Lines
    const line = await prisma.line.findFirst({
      where: { id: params.id },
    });

    if (!line) {
      throw new AppError("Linha nao encontrada", 400);
    }

    const driverInfo = await prisma.driver.findFirst({
      where: { id: line?.driverId },
    });

    const driverUserInfo = await prisma.user.findFirst({
      where: { id: driverInfo?.userId },
    });

    const filterDriverInfo = {
      name: driverUserInfo?.name,
      company: driverInfo?.company,
    };

    const lineStopPoints = await prisma.lineStopPoints.findMany({
      where: { lineId: line.id },
    });

    const stopPointIds = Array.from(
      new Set(lineStopPoints.map((e) => e.stopPointId))
    );
    const stopPoints = await prisma.stopPoint.findMany({
      where: { id: { in: stopPointIds } },
    });

    const linesStopPointsInfo = lineStopPoints.map((e) => {
      const stopPointInfo = stopPoints.filter((i) => i.id === e.stopPointId)[0];

      return {
        lineId: e.lineId,
        address: stopPointInfo.address,
        reference: stopPointInfo.reference,
        stop_time: e.stop_time,
      };
    });

    const responseData = {
      id: line.id,
      name: line.name,
      coordName: line.coordName,
      startPoint: line.startPoint,
      endPoint: line.endPoint,
      bus: line.bus,
      driverId: line.driverId,
      driver: filterDriverInfo,
      stopPoints: linesStopPointsInfo,
    };

    return responseData;
  }
}
