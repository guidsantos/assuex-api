"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
exports.__esModule = true;
require("dotenv/config");
require("express-async-errors");
var express_1 = __importDefault(require("express"));
var AppError_1 = __importDefault(require("./utils/errors/AppError"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = require("./routes");
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use(routes_1.routes);
app.get("/", function (req, res) { return res.send("Works"); });
app.use(function (err, request, response, _) {
    if (err instanceof AppError_1["default"]) {
        return response
            .status(err.statusCode)
            .json({ status: "error", message: err.message });
    }
    console.error(err);
    return response
        .status(500)
        .json({ status: "error", message: "Internal server error" });
});
var PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3333;
app.listen(PORT, function () {
    console.log("App listening on port ".concat(PORT));
});
