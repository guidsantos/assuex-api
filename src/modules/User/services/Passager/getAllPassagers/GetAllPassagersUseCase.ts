import { PrismaClient } from "@prisma/client";

import AppError from "../../../../../utils/errors/AppError";

const prisma = new PrismaClient();

export class GetAllPassagersUseCase {
  async execute() {
    //Validar se usuario existe
    const passagers = await prisma.passager.findMany();

    const usersId = passagers.map((e) => e.userId);

    const users = await prisma.user.findMany({
      where: { id: { in: usersId } },
    });

    const filterUsers = users.map((e) => {
      const { password, cpf, ...res } = e;
      return res;
    });

    const filterPassagers = passagers.map((e) => {
      const {userId,...res } = e;
      return res;
    });

    const responseData = filterUsers.map((e, idx) => {
      const passagerObj = filterPassagers[idx];

      const obj = {
        userInfo: e,
        passagerInfo: passagerObj,
      };

      return obj;
    });

    return responseData;
  }
}
