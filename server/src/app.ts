import express, {Application, Request, Response} from 'express';
import { skaiciuokleRouter } from './routes/skaiciuokle.router';

const app:Application=express();

app.use('/skaiciuokle', skaiciuokleRouter);


export {app};