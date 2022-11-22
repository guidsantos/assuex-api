import { Request, response, Response } from "express";
import { CreateLineStopUseCase } from "./CreateLineStopUseCase";

export class CreateLineStopController {
  async handle(req: Request, res: Response) {
    const bodyData = req.body;

    const createLineStopUseCase = new CreateLineStopUseCase();

    const result = await createLineStopUseCase.execute(bodyData);

    return res.json(result);
  }
}
