import { Request, response, Response } from "express";
import { UpdateLineUseCase } from "./UpdateLineUseCase";

export class UpdateLineController {
  async handle(req: Request, res: Response) {
    const bodyData = req.body;

    const updateLineUseCase = new UpdateLineUseCase();

    const result = await updateLineUseCase.execute(bodyData);

    return res.json(result);
  }
}
