import express, {Response} from 'npm:express';

const app = express();

app.get('/',(res:Response)=>{
    res.send('i am testing');
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})