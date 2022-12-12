import { PrismaClient } from "@prisma/client";

import AppError from "../../../../../utils/errors/AppError";

interface ICreateLine {
  name: string;
  driverId: number;
}

const prisma = new PrismaClient();

export class CreateLineUseCase {
  async execute(data: ICreateLine) {
    //Validar se a linha existe
    const lineExist = await prisma.line.findFirst({
      where: {
        name: data.name,
      },
    });

    if (lineExist) {
      throw new AppError("line already exists", 401);
    }

    //Salvar linha
    const line = await prisma.line.create({
      data,
    });

    return line;
  }
}
