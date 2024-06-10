import { Request, Response } from "express";
import {createClient, getClient } from '../services/service'


export const addClient = async(req:Request, res: Response)=>{
    const client = await createClient(req.body);
    res.json(client);
}

export const getClients = async(req:Request, res: Response)=>{

    const client = await getClient();
    res.json(client);
        
}