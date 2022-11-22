import { Router } from "express";

import { CreateDriverController } from "../services/Driver/createDriver/CreateDriverController";
import { CreatePassagerController } from "../services/Passager/createPassager/CreatePassagerController";
import { CreateUserController } from "../services/createUser/CreateUserController";
import { UpdatePassagerController } from "../services/Passager/updatePassager/updatePassagerController";


const userRoutes = Router();

const createUserController = new CreateUserController();

const createPassagerController = new CreatePassagerController();
const updatePassagerController = new UpdatePassagerController();

const createDriverController = new CreateDriverController();

userRoutes.post("", createUserController.handle);

userRoutes.post("/passager", createPassagerController.handle);
userRoutes.put("/passager", updatePassagerController.handle);

userRoutes.post("/driver", createDriverController.handle);


export { userRoutes };
