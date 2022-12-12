import { Request, response, Response } from "express";
import { CreateLineStopPointUseCase } from "./CreateLineStopPointUseCase";

export class CreateLineStopPointController {
  async handle(req: Request, res: Response) {
    const bodyData = req.body;

    const createLineStopUseCase = new CreateLineStopPointUseCase();

    const result = await createLineStopUseCase.execute(bodyData);

    return res.json(result);
  }
}
