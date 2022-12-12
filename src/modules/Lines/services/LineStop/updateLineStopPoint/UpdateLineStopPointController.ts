import { Request, response, Response } from "express";
import { UpdateLineStopPointUseCase } from "./UpdateLineStopPointUseCase";

export class UpdateLineStopPointController {
  async handle(req: Request, res: Response) {
    const bodyData = req.body;

    const updateLineStopPointsUseCase = new UpdateLineStopPointUseCase();

    const result = await updateLineStopPointsUseCase.execute(bodyData);

    return res.json(result);
  }
}
