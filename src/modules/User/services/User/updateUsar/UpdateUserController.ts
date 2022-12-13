import { Request, response, Response } from "express";
import { UpdateUserControllerUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const bodyData = req.body;

    const updateUserControllerUserUseCase = new UpdateUserControllerUserUseCase();

    const result = await updateUserControllerUserUseCase.execute(bodyData);

    return res.json(result);
  }
}
