import { Request, response, Response } from "express";
import { UpdatePassagerUseCase } from "./UpdatePassagerUseCase";

export class UpdatePassagerController {
  async handle(req: Request, res: Response) {
    const bodyData = req.body;

    const updatePassagerUseCase = new UpdatePassagerUseCase();

    const result = await updatePassagerUseCase.execute(bodyData);

    return res.json(result);
  }
}
