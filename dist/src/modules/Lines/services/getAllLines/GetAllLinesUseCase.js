"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.GetAllLinesUseCase = void 0;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var GetAllLinesUseCase = /** @class */ (function () {
    function GetAllLinesUseCase() {
    }
    GetAllLinesUseCase.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lines, driverIds, driversInfo, usersIds, driverNames, filterDriversInfo, linesId, lineStopPoints, stopPointIds, stopPoints, linesStopPointsInfo, responseData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma.line.findMany()];
                    case 1:
                        lines = _a.sent();
                        driverIds = lines.map(function (e) { return e.driverId; });
                        return [4 /*yield*/, prisma.driver.findMany({
                                where: { id: { "in": driverIds } }
                            })];
                    case 2:
                        driversInfo = _a.sent();
                        usersIds = driversInfo.map(function (e) { return e.userId; });
                        return [4 /*yield*/, prisma.user.findMany({
                                where: { id: { "in": usersIds } }
                            })];
                    case 3:
                        driverNames = _a.sent();
                        filterDriversInfo = driversInfo.map(function (e, idx) {
                            var name = driverNames[idx].name;
                            var cnh = e.cnh, userId = e.userId, res = __rest(e, ["cnh", "userId"]);
                            return __assign({ name: name }, res);
                        });
                        linesId = Array.from(new Set(lines.map(function (e) { return e.id; })));
                        return [4 /*yield*/, prisma.lineStopPoints.findMany({
                                where: { lineId: { "in": linesId } }
                            })];
                    case 4:
                        lineStopPoints = _a.sent();
                        stopPointIds = Array.from(new Set(lineStopPoints.map(function (e) { return e.stopPointId; })));
                        return [4 /*yield*/, prisma.stopPoint.findMany({
                                where: { id: { "in": stopPointIds } }
                            })];
                    case 5:
                        stopPoints = _a.sent();
                        linesStopPointsInfo = lineStopPoints.map(function (e) {
                            var stopPointInfo = stopPoints.filter(function (i) { return i.id === e.stopPointId; })[0];
                            return {
                                lineId: e.lineId,
                                address: stopPointInfo.address,
                                reference: stopPointInfo.reference,
                                stop_time: e.stop_time
                            };
                        });
                        responseData = lines.map(function (e, idx) {
                            var lineStopPointsInfo = linesStopPointsInfo.filter(function (i) { return i.lineId === e.id; });
                            return {
                                lineName: e.name,
                                driver: filterDriversInfo[idx],
                                stopPoints: lineStopPointsInfo
                            };
                        });
                        return [2 /*return*/, responseData];
                }
            });
        });
    };
    return GetAllLinesUseCase;
}());
exports.GetAllLinesUseCase = GetAllLinesUseCase;
