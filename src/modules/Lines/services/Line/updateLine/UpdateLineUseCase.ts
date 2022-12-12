import { PrismaClient } from "@prisma/client";

import AppError from "../../../../../utils/errors/AppError";

interface IUpdateLine {
  id: number;
  name?: string;
  driverId?: number;
}

const prisma = new PrismaClient();

export class UpdateLineUseCase {
  async execute(data: IUpdateLine) {
    //Validar se a linha existe
    const lineExist = await prisma.line.findFirst({
      where: {
        id: data.id,
      },
    });

    if (!lineExist) {
      throw new AppError("line dont exists", 401);
    }



    //Salvar linha
    const line = await prisma.line.update({
      where: { id: data.id },
      data,
    });

    return line;
  }
}
