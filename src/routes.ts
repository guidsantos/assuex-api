import { Router } from "express";
import { CreateUserController } from "./modules/User/controllers/CreateUserController";
import { AuthenticateUserController } from "./modules/account/controllers/AuthenticateUserController";

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

routes.post("/user", createUserController.handle);
routes.post("/signin", authenticateUserController.handle);

export { routes };
