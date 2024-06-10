import { Request, Response } from "express";
import {createOrganization, getOrganisation } from '../services/service'


export const addOrganization = async(req:Request, res: Response)=>{
    const organization = await createOrganization(req.body);
    res.json(organization);
}

export const getOrganisations = async(req:Request, res: Response)=>{

    const organization = await getOrganisation();
    res.json(organization);
        
}