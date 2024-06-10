import express from 'express';

import { addClient, getClients } from '../controller/clientController';

const router = express.Router();

router.post('/', async(req, res)=> addClient(req, res));

router.get('/', async(req, res)=> getClients(req,res));


export default router;