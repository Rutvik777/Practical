import express from 'express';
import mongoose from 'mongoose';
import route from './route/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());

const port = process.env.port || 3000;
const URL = 'mongodb+srv://rutvik:rutvikjobanputra@practical.lzoau.mongodb.net/practical?retryWrites=true&w=majority';

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() =>{
    app.listen(port, () => {
        console.log(`connection is running at ${port}`);
    });
}).catch((e) => {
    console.log("error is occured",e.message);
});



app.use('/users',route);
