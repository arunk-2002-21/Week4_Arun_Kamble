"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
class Client extends sequelize_1.Model {
}
exports.Client = Client;
Client.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    orgId: {
        type: sequelize_1.DataTypes.STRING,
    },
    MSAValidFrom: {
        type: sequelize_1.DataTypes.DATE,
    },
    MSAValidUpto: sequelize_1.DataTypes.DATE,
    LegalName: sequelize_1.DataTypes.STRING,
    NDASignedOn: sequelize_1.DataTypes.DATE,
    ShortName: sequelize_1.DataTypes.STRING,
    NDAValidFrom: sequelize_1.DataTypes.DATE,
    NDAValidUpto: sequelize_1.DataTypes.DATE,
    AddressId: sequelize_1.DataTypes.STRING,
    DisplayName: sequelize_1.DataTypes.STRING,
    IsNDASigned: sequelize_1.DataTypes.DATE,
    IsMSASigned: sequelize_1.DataTypes.BOOLEAN,
    MSASignedOn: sequelize_1.DataTypes.DATE
}, {
    sequelize: pgConfig_1.default,
    tableName: 'client'
});
//# sourceMappingURL=client.js.map