import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class GetAllLinesUseCase {
  async execute() {
    //Get all Lines
    const lines = await prisma.line.findMany();

    const driverIds = lines.map((e) => e.driverId);

    const driversInfo = await prisma.driver.findMany({
      where: { id: { in: driverIds } },
    });

    const usersIds = driversInfo.map((e) => e.userId);
    const driverNames = await prisma.user.findMany({
      where: { id: { in: usersIds } },
    });

    const filterDriversInfo = driversInfo.map((e, idx) => {
      const name = driverNames[idx].name;
      const { cnh, userId, id, ...res } = e;
      return { name, ...res };
    });

    const linesId = Array.from(new Set(lines.map((e) => e.id)));
    const lineStopPoints = await prisma.lineStopPoints.findMany({
      where: { lineId: { in: linesId } },
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

    const responseData = lines.map((e, idx) => {
      const lineStopPointsInfo = linesStopPointsInfo.filter(
        (i) => i.lineId === e.id
      );

      const filterLineStopInfo = lineStopPointsInfo.map((e) => {
        const { lineId, ...res } = e;
        return res;
      });

      return {
        lineName: e.name,
        driver: filterDriversInfo[idx],
        stopPoints: filterLineStopInfo,
      };
    });

    return responseData;
  }
}
