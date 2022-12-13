import { Request, Response } from "express";
import { GetLineByIdUseCase, IGetLineById } from "./GetLineByIdUseCase";

export class GetLineByIdController {
  async handle(req: Request<IGetLineById>, res: Response) {
    const params = req.params;

    const getLineByIdUseCase = new GetLineByIdUseCase();

    const result = await getLineByIdUseCase.execute(params);

    return res.json(result);
  }
}
