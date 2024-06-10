import sequelize from "sequelize";
import { Client } from "../models/client";
import { Organization } from "../models/organization";
import { Sow } from "../models/sowmanagment";


async function createOrganization(organization: any): Promise<any> {
    try{
        const newOrganization =await  Organization.create(organization);
        if(newOrganization){
            return newOrganization; 
        }
       
    }catch(err: any){
        throw err 
    }

}

async function createClient(client: any): Promise<any> {
    try{
        const newClient = await  Client.create(client);
        if(newClient){
            return newClient; 
        }
       
    }catch(err: any){
        throw err 
    }

}

async function getOrganisation(): Promise<any[]> {
    try{
      const organization = await Organization.findAll();
    return organization;

    }
    catch(err: any){
    throw err 
}
    
}

async function getClient(): Promise<any[]> {
    try{
      const client = await Client.findAll();
    return client;

    }
    catch(err: any){
    throw err 
}
    
}

export {createOrganization, createClient, getOrganisation, getClient };