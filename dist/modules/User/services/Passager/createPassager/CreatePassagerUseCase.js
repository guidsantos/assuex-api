"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.CreatePassagerUseCase = void 0;
var client_1 = require("@prisma/client");
var AppError_1 = __importDefault(require("../../../../../utils/errors/AppError"));
var prisma = new client_1.PrismaClient();
var CreatePassagerUseCase = /** @class */ (function () {
    function CreatePassagerUseCase() {
    }
    CreatePassagerUseCase.prototype.execute = function (_a) {
        var bith_date = _a.bith_date, cep = _a.cep, address = _a.address, number = _a.number, complement = _a.complement, bairro = _a.bairro, cidade = _a.cidade, linha_interesse = _a.linha_interesse, start_date = _a.start_date, start_point = _a.start_point, end_point = _a.end_point, back_point = _a.back_point, finish_point = _a.finish_point, userId = _a.userId;
        return __awaiter(this, void 0, void 0, function () {
            var clientExist, formatData, client;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, prisma.user.findFirst({
                            where: {
                                id: userId
                            }
                        })];
                    case 1:
                        clientExist = _b.sent();
                        if (!clientExist) {
                            throw new AppError_1["default"]("user don't exists", 401);
                        }
                        formatData = {
                            bith_date: new Date(bith_date),
                            cep: cep,
                            address: address,
                            number: number,
                            complement: complement,
                            bairro: bairro,
                            cidade: cidade,
                            linha_interesse: linha_interesse,
                            start_date: new Date(start_date),
                            start_point: start_point,
                            end_point: end_point,
                            back_point: back_point,
                            finish_point: finish_point,
                            userId: userId
                        };
                        return [4 /*yield*/, prisma.passager.create({
                                data: formatData
                            })];
                    case 2:
                        client = _b.sent();
                        return [2 /*return*/, client];
                }
            });
        });
    };
    return CreatePassagerUseCase;
}());
exports.CreatePassagerUseCase = CreatePassagerUseCase;
