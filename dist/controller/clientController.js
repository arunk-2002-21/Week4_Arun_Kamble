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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClients = exports.addClient = void 0;
const service_1 = require("../services/service");
const addClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield (0, service_1.createClient)(req.body);
    res.json(client);
});
exports.addClient = addClient;
const getClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield (0, service_1.getClient)();
    res.json(client);
});
exports.getClients = getClients;
//# sourceMappingURL=clientController.js.map