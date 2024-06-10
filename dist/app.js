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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const service_1 = require("./services/service");
const organizationRoutes_1 = __importDefault(require("./routes/organizationRoutes"));
const clientRoutes_1 = __importDefault(require("./routes/clientRoutes"));
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
app.post('/neworganization', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, service_1.createOrganization)(req.body);
    res.send("Organization created successfully");
}));
app.post('/newclient', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, service_1.createClient)(req.body);
    res.send("Client created successfully");
}));
app.get('/organization', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const organization = yield (0, service_1.getOrganisation)();
    res.json(organization);
}));
app.get('/client', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield (0, service_1.getClient)();
    res.json(client);
}));
app.use('/api/organization', organizationRoutes_1.default);
app.use('/api/client', clientRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
//# sourceMappingURL=app.js.map