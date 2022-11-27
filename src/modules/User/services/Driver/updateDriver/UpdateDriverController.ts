import { Request, response, Response } from "express";
import { UpdateDriverUseCase } from "./UpdateDriverUseCase";

export class UpdateDriverController {
  async handle(req: Request, res: Response) {
    const bodyData = req.body;

    const updateDriverUseCase = new UpdateDriverUseCase();

    const result = await updateDriverUseCase.execute(bodyData);

    return res.json(result);
  }
}
