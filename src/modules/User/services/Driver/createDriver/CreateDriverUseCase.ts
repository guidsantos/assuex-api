import { PrismaClient } from "@prisma/client";

import AppError from "../../../../../utils/errors/AppError";

interface ICreateDriver {
  id: number;
  company: string;
  cnh: string;
  userId: number;
}

const prisma = new PrismaClient();

export class CreateDriverUseCase {
  async execute(data: ICreateDriver) {
    //Validar se usuario existe
    const userExist = await prisma.user.findFirst({
      where: {
        id: data.userId,
      },
    });

    if (!userExist) {
      throw new AppError("user don't exists", 401);
    }

    const driverExists = await prisma.driver.findFirst({
      where: {
        userId: data.userId,
      },
    });

    if (driverExists) {
      throw new AppError("driver already exists", 401);
    }

    await prisma.user.update({
      where: { id: userExist.id },
      data: {
        type: "DRIVER",
      },
    });

    //Salvar driver
    const driver = await prisma.driver.create({
      data,
    });

    return driver;
  }
}
