import { Model, DataTypes } from "sequelize";
import sequelize from "../postgresDB/pgConfig";

interface ClientAttributes{
    id?: string;
    orgId: string;
    MSAValidFrom: Date;
    MSAValidUpto: Date;
    LegalName: string;
    NDASignedOn: Date;
    ShortName: string;
    NDAValidFrom: Date;
    NDAValidUpto: Date;
    AddressId: string;
    DisplayName: string;
    IsNDASigned: boolean;
    IsMSASigned: boolean;
    MSASignedOn: Date;

}

export class Client extends Model<ClientAttributes> implements ClientAttributes {
    public id!: string;
    public orgId!: string;
    public MSAValidFrom!: Date;
    public MSAValidUpto!: Date;
    public LegalName!: string;
    public NDASignedOn!: Date;
    public ShortName!: string;
    public NDAValidFrom!: Date;
    public NDAValidUpto!: Date;
    public AddressId!: string;
    public DisplayName!: string;
    public IsNDASigned!: boolean;
    public IsMSASigned!: boolean;
    public MSASignedOn!: Date;
}

Client.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    orgId: {
        type: DataTypes.STRING,
    },
    MSAValidFrom: {
        type: DataTypes.DATE,
    },
    MSAValidUpto: DataTypes.DATE,
    LegalName: DataTypes.STRING,
    NDASignedOn: DataTypes.DATE,
    ShortName: DataTypes.STRING,
    NDAValidFrom: DataTypes.DATE,
    NDAValidUpto: DataTypes.DATE,
    AddressId:DataTypes.STRING,
    DisplayName: DataTypes.STRING,
    IsNDASigned: DataTypes.DATE,
    IsMSASigned: DataTypes.BOOLEAN,
    MSASignedOn: DataTypes.DATE      
},
    {
        sequelize,
        tableName:'client'
    }

);