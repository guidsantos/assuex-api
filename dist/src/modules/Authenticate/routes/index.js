"use strict";
exports.__esModule = true;
exports.authRoutes = void 0;
var express_1 = require("express");
var AuthenticateUserController_1 = require("../controllers/AuthenticateUserController");
var authRoutes = (0, express_1.Router)();
exports.authRoutes = authRoutes;
var authenticateUserController = new AuthenticateUserController_1.AuthenticateUserController();
authRoutes.post("/signin", authenticateUserController.handle);
