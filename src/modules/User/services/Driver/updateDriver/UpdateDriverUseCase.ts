import { PrismaClient } from "@prisma/client";

import AppError from "../../../../../utils/errors/AppError";

interface IUpdateDriver {
  id: number;
  company?: string;
  cnh?: string;
}

const prisma = new PrismaClient();

export class UpdateDriverUseCase {
  async execute(data: IUpdateDriver) {
    const driverExists = await prisma.driver.findFirst({
      where: {
        id: data.id,
      },
    });

    if (!driverExists) {
      throw new AppError("driver dont exists", 401);
    }

    //Salvar driver
    const driver = await prisma.driver.update({
      where: {
        id: data.id,
      },
      data,
    });

    return driver;
  }
}
