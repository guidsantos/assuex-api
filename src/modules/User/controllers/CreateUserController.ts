import { Request, response, Response } from "express";
import { CreateUserUseCase } from "../services/createUser/CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const bodyData = req.body;

    const createUserUseCase = new CreateUserUseCase();

    const result = await createUserUseCase.execute(bodyData);

    return res.json(result);
  }
}
