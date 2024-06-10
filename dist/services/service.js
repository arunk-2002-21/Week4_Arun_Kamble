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
exports.getClient = exports.getOrganisation = exports.createClient = exports.createOrganization = void 0;
const client_1 = require("../models/client");
const organization_1 = require("../models/organization");
function createOrganization(organization) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newOrganization = yield organization_1.Organization.create(organization);
            if (newOrganization) {
                return newOrganization;
            }
        }
        catch (err) {
            throw err;
        }
    });
}
exports.createOrganization = createOrganization;
function createClient(client) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newClient = yield client_1.Client.create(client);
            if (newClient) {
                return newClient;
            }
        }
        catch (err) {
            throw err;
        }
    });
}
exports.createClient = createClient;
function getOrganisation() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const organization = yield organization_1.Organization.findAll();
            return organization;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.getOrganisation = getOrganisation;
function getClient() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const client = yield client_1.Client.findAll();
            return client;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.getClient = getClient;
//# sourceMappingURL=service.js.map