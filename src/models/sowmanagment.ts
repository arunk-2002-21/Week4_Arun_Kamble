import { Model, DataTypes } from "sequelize";
import sequelize from "../postgresDB/pgConfig";

interface SowManagmentAttributes{
    id?: string;
    invoiceEmailAddresses: string;
    customerId: string;
    customerPONumber: string;
    title: string;
    customerSONumber: string;
    // validityPeriod:{
    //     validFrom: Date;
    //     validUpto: Date;
    // };
    totalValue: number;
    currency: string;
}

export class Sow extends Model<SowManagmentAttributes> implements SowManagmentAttributes {
    public id!: string;
    public invoiceEmailAddresses!: string;
    public customerId!: string;
    public customerPONumber!: string;
    public title!: string;
    public customerSONumber!: string;
    // public validityPeriod!:{
    //     validFrom: Date;
    //     validUpto: Date;
    // };
    public totalValue!: number;
    public currency!: string;
}

Sow.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    invoiceEmailAddresses: {
        type: DataTypes.STRING,
    },
    customerId: {
        type: DataTypes.STRING,
    },
    customerPONumber: DataTypes.STRING,
    title: DataTypes.STRING,
    customerSONumber: DataTypes.STRING,
    // validityPeriod:{
    //     validFrom: DataTypes.DATE,
    //    validUpto: DataTypes.DATE
    // }, 
    totalValue: DataTypes.STRING,
    currency: DataTypes.STRING,    
},
    {
        sequelize,
        tableName:'sowmanage'
    }

);