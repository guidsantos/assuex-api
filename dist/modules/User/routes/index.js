"use strict";
exports.__esModule = true;
exports.userRoutes = void 0;
var express_1 = require("express");
var CreateDriverController_1 = require("../services/Driver/createDriver/CreateDriverController");
var CreatePassagerController_1 = require("../services/Passager/createPassager/CreatePassagerController");
var CreateUserController_1 = require("../services/User/createUser/CreateUserController");
var UpdatePassagerController_1 = require("../services/Passager/updatePassager/UpdatePassagerController");
var GetAllPassagersController_1 = require("../services/Passager/getAllPassagers/GetAllPassagersController");
var UpdateDriverController_1 = require("../services/Driver/updateDriver/UpdateDriverController");
var UpdateUserController_1 = require("../services/User/updateUsar/UpdateUserController");
var userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
var createUserController = new CreateUserController_1.CreateUserController();
var updateUserController = new UpdateUserController_1.UpdateUserController();
var createPassagerController = new CreatePassagerController_1.CreatePassagerController();
var updatePassagerController = new UpdatePassagerController_1.UpdatePassagerController();
var getAllPassagersController = new GetAllPassagersController_1.GetAllPassagersController();
var createDriverController = new CreateDriverController_1.CreateDriverController();
var updateDriverController = new UpdateDriverController_1.UpdateDriverController();
userRoutes.post("", createUserController.handle);
userRoutes.put("", updateUserController.handle);
userRoutes.post("/passager", createPassagerController.handle);
userRoutes.put("/passager", updatePassagerController.handle);
userRoutes.get("/passager", getAllPassagersController.handle);
userRoutes.post("/driver", createDriverController.handle);
userRoutes.put("/driver", updateDriverController.handle);
