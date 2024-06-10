import { Model, DataTypes } from "sequelize";
import sequelize from "../postgresDB/pgConfig";

interface OrganizationAttributes{
    id?: string;
    gstNo: string;
    panNo: string;
    legalOrganizationNameord: string;
    invoiceTemplateId: string;
    shortName: string;
    contactName: string;
    displayName: string;
    email: string;
    address: string;
    phone: number;
}

export class Organization extends Model<OrganizationAttributes> implements OrganizationAttributes {
    public id!: string;
    public gstNo!: string;
    public panNo!: string;
    public legalOrganizationNameord!: string;
    public invoiceTemplateId!: string;
    public shortName!: string;
    public contactName!: string;
    public displayName!: string;
    public email!: string;
    public address!: string;
    public phone!: number;
}

Organization.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    gstNo: {
        type: DataTypes.STRING,
    },
    panNo: {
        type: DataTypes.STRING,
    },
    legalOrganizationNameord: DataTypes.STRING,
    invoiceTemplateId: DataTypes.STRING,
    shortName: DataTypes.STRING,
    contactName: DataTypes.STRING,
    displayName: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    address: DataTypes.STRING,
    phone: DataTypes.INTEGER,
       
},
    {
        sequelize,
        tableName:'organize'
    }

);