import { Request, response, Response } from "express";
import { GetAllLinesUseCase } from "./GetAllLinesUseCase";

export class GetAllLinesController {
  async handle(req: Request, res: Response) {
    const getAllLinesUseCase = new GetAllLinesUseCase();

    const result = await getAllLinesUseCase.execute();

    return res.json(result);
  }
}
