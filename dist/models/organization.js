"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
class Organization extends sequelize_1.Model {
}
exports.Organization = Organization;
Organization.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    gstNo: {
        type: sequelize_1.DataTypes.STRING,
    },
    panNo: {
        type: sequelize_1.DataTypes.STRING,
    },
    legalOrganizationNameord: sequelize_1.DataTypes.STRING,
    invoiceTemplateId: sequelize_1.DataTypes.STRING,
    shortName: sequelize_1.DataTypes.STRING,
    contactName: sequelize_1.DataTypes.STRING,
    displayName: sequelize_1.DataTypes.STRING,
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true
    },
    address: sequelize_1.DataTypes.STRING,
    phone: sequelize_1.DataTypes.INTEGER,
}, {
    sequelize: pgConfig_1.default,
    tableName: 'organize'
});
//# sourceMappingURL=organization.js.map