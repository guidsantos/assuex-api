import { Request, response, Response } from "express";
import { CreateUserUseCase } from "../useCases/createUser/CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const createUserUseCase = new CreateUserUseCase();

    const result = await createUserUseCase.execute({
      email,
      password,
    });

    return res.json(result);
  }
}
