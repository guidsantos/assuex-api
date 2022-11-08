import { Router } from "express";
import { CreateUserController } from "./modules/User/controllers/CreateUserController";
import { CreatePassagerController } from "./modules/User/controllers/CreatePassagerController";
import { AuthenticateUserController } from "./modules/account/controllers/AuthenticateUserController";

const routes = Router();

const createUserController = new CreateUserController();
const createPassagerController = new CreatePassagerController();

const authenticateUserController = new AuthenticateUserController();

routes.post("/user", createUserController.handle);
routes.post("/passager", createPassagerController.handle);
routes.post("/signin", authenticateUserController.handle);

export { routes };
