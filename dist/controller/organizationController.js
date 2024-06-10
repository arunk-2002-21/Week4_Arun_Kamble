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
exports.getOrganisations = exports.addOrganization = void 0;
const service_1 = require("../services/service");
const addOrganization = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const organization = yield (0, service_1.createOrganization)(req.body);
    res.json(organization);
});
exports.addOrganization = addOrganization;
const getOrganisations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const organization = yield (0, service_1.getOrganisation)();
    res.json(organization);
});
exports.getOrganisations = getOrganisations;
//# sourceMappingURL=organizationController.js.map