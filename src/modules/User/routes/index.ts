import { Router } from "express";

import { CreateDriverController } from "../services/Driver/createDriver/CreateDriverController";
import { CreatePassagerController } from "../services/Passager/createPassager/CreatePassagerController";
import { CreateUserController } from "../services/User/createUser/CreateUserController";
import { UpdatePassagerController } from "../services/Passager/updatePassager/UpdatePassagerController";
import { GetAllPassagersController } from "../services/Passager/getAllPassagers/GetAllPassagersController";
import { UpdateDriverController } from "../services/Driver/updateDriver/UpdateDriverController";
import { UpdateUserController } from "../services/User/updateUsar/UpdateUserController";


const userRoutes = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController()


const createPassagerController = new CreatePassagerController();
const updatePassagerController = new UpdatePassagerController();
const getAllPassagersController = new GetAllPassagersController();

const createDriverController = new CreateDriverController();
const updateDriverController = new UpdateDriverController();


userRoutes.post("", createUserController.handle);
userRoutes.put("",updateUserController.handle)

userRoutes.post("/passager", createPassagerController.handle);
userRoutes.put("/passager", updatePassagerController.handle);
userRoutes.get("/passager", getAllPassagersController.handle)

userRoutes.post("/driver", createDriverController.handle);
userRoutes.put("/driver", updateDriverController.handle);

export { userRoutes };
