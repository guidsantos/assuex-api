import { Request, response, Response } from "express";
import { CreatePassagerUseCase } from "./CreatePassagerUseCase";

export class CreatePassagerController {
  async handle(req: Request, res: Response) {
    const bodyData = req.body;

    const createPassagerUseCase = new CreatePassagerUseCase();

    const result = await createPassagerUseCase.execute(bodyData);

    return res.json(result);
  }
}
