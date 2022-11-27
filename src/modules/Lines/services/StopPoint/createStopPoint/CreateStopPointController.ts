import { Request, response, Response } from "express";
import { CreateStopPointUseCase } from "./CreateStopPointUseCase";

export class CreateStopPointController {
  async handle(req: Request, res: Response) {
    const bodyData = req.body;

    const createStopPointUseCase = new CreateStopPointUseCase();

    const result = await createStopPointUseCase.execute(bodyData);

    return res.json(result);
  }
}
