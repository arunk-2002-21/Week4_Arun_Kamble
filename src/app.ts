import express, {Request , Response} from "express";
import {createOrganization, createClient, getOrganisation, getClient } from './services/service'
import organizationRoutes from './routes/organizationRoutes';
import clientRoutes from './routes/clientRoutes';

const app = express();
const port = 8080;
app.use(express.json());

app.post('/neworganization', async (req: Request,res: Response)=> {
     await createOrganization(req.body);  
    res.send("Organization created successfully")
  
});


app.post('/newclient', async(req: Request,res: Response) => {
    await createClient(req.body);  
   res.send("Client created successfully")
 
});

app.get('/organization', async(req: Request,res: Response)=> {
    const organization = await getOrganisation();
    res.json(organization);
});

app.get('/client', async (req: Request,res: Response)=> {
    const client = await getClient();
    res.json(client);
});

app.use('/api/organization', organizationRoutes);
app.use('/api/client', clientRoutes);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})