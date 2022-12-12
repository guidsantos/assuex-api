import { Request, response, Response } from "express";
import { GetAllPassagersUseCase } from "./GetAllPassagersUseCase";

export class GetAllPassagersController {
  async handle(req: Request, res: Response) {
    const getAllPassagersUseCase = new GetAllPassagersUseCase();

    const result = await getAllPassagersUseCase.execute();

    return res.json(result);
  }
}
