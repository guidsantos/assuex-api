"use strict";
exports.__esModule = true;
exports.userRoutes = void 0;
var express_1 = require("express");
var CreateDriverController_1 = require("../services/Driver/createDriver/CreateDriverController");
var CreatePassagerController_1 = require("../services/Passager/createPassager/CreatePassagerController");
var CreateUserController_1 = require("../services/createUser/CreateUserController");
var updatePassagerController_1 = require("../services/Passager/updatePassager/updatePassagerController");
var userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
var createUserController = new CreateUserController_1.CreateUserController();
var createPassagerController = new CreatePassagerController_1.CreatePassagerController();
var updatePassagerController = new updatePassagerController_1.UpdatePassagerController();
var createDriverController = new CreateDriverController_1.CreateDriverController();
userRoutes.post("", createUserController.handle);
userRoutes.post("/passager", createPassagerController.handle);
userRoutes.put("/passager", updatePassagerController.handle);
userRoutes.post("/driver", createDriverController.handle);
