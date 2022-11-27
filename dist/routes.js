"use strict";
exports.__esModule = true;
exports.routes = void 0;
var express_1 = require("express");
var routes_1 = require("./modules/User/routes");
var routes_2 = require("./modules/Lines/routes");
var routes_3 = require("./modules/Authenticate/routes");
var routes = (0, express_1.Router)();
exports.routes = routes;
routes.use("/user", routes_1.userRoutes);
routes.use("/authentication", routes_3.authRoutes);
routes.use("/line", routes_2.lineRoutes);