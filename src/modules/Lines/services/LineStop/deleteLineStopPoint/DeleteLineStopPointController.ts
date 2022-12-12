import { Request, response, Response } from "express";
import { DeleteLineStopPointUseCase } from "./DeleteLineStopPointUseCase";

export class DeleteLineStopPointController {
  async handle(req: Request, res: Response) {
    const bodyData = req.body;

    const deleteLineStopPointsUseCase = new DeleteLineStopPointUseCase();

    const result = await deleteLineStopPointsUseCase.execute(bodyData);

    return res.json(result);
  }
}
