import { Router } from "express";
import { CreateUserController } from "./modules/User/controllers/CreateUserController";
import { CreatePassagerController } from "./modules/User/controllers/CreatePassagerController";
import { CreateDriverController } from "./modules/User/controllers/CreateDriverController";

import { CreateLineController } from "./modules/Lines/controllers/CreateLineController";

import { AuthenticateUserController } from "./modules/Account/controllers/AuthenticateUserController";



const routes = Router();

const createUserController = new CreateUserController();
const createPassagerController = new CreatePassagerController();
const createDriverController = new CreateDriverController();

const createLineController = new CreateLineController();

const authenticateUserController = new AuthenticateUserController();

routes.post("/user", createUserController.handle);
routes.post("/user/passager", createPassagerController.handle);
routes.post("/user/driver", createDriverController.handle);

routes.post("/line", createLineController.handle);

routes.post("/signin", authenticateUserController.handle);


export { routes };
