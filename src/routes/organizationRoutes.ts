import express from 'express';

import { addOrganization, getOrganisations } from '../controller/organizationController';

const router = express.Router();

router.post('/', async(req, res)=> addOrganization(req, res));

router.get('/', async(req, res)=> getOrganisations(req,res));


export default router;