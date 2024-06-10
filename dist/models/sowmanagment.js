"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sow = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
class Sow extends sequelize_1.Model {
}
exports.Sow = Sow;
Sow.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    invoiceEmailAddresses: {
        type: sequelize_1.DataTypes.STRING,
    },
    customerId: {
        type: sequelize_1.DataTypes.STRING,
    },
    customerPONumber: sequelize_1.DataTypes.STRING,
    title: sequelize_1.DataTypes.STRING,
    customerSONumber: sequelize_1.DataTypes.STRING,
    // validityPeriod:{
    //     validFrom: DataTypes.DATE,
    //    validUpto: DataTypes.DATE
    // }, 
    totalValue: sequelize_1.DataTypes.STRING,
    currency: sequelize_1.DataTypes.STRING,
}, {
    sequelize: pgConfig_1.default,
    tableName: 'sowmanage'
});
//# sourceMappingURL=sowmanagment.js.map