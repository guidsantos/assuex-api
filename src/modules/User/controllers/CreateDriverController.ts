import { Request, response, Response } from "express";
import { CreateDriverUseCase } from "../services/createDriver/CreateDriverUseCase";

export class CreateDriverController {
  async handle(req: Request, res: Response) {
    const bodyData = req.body;

    const createDriverUseCase = new CreateDriverUseCase();

    const result = await createDriverUseCase.execute(bodyData);

    return res.json(result);
  }
}
