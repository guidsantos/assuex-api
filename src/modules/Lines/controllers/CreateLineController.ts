import { Request, response, Response } from "express";
import { CreateLineUseCase } from "../services/createLine/CreateLineUseCase";

export class CreateLineController {
  async handle(req: Request, res: Response) {
    const bodyData = req.body;

    const createLineUseCase = new CreateLineUseCase();

    const result = await createLineUseCase.execute(bodyData);

    return res.json(result);
  }
}
