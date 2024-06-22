import express, {Application, Request, Response} from 'express';
import { skaiciuokleRouter } from './routes/skaiciuokle.router';
import bodyParser from 'body-parser';
import { corsHeaders } from './middlewares/cors.middleware';
import { productsRouter } from './routes/products.router';
import { authRouter } from './routes/auth.router';
import { authMiddleware } from './middlewares/auth.middleware';
import { userRouter } from './routes/user.router';
import path from 'path';
import { ordersRouter } from './routes/orders.router';

const app:Application=express();

// sutvarkomi duomenys, jei buvo siusta forma
// app.use(bodyParser.urlencoded());

app.use(express.urlencoded());

// sutvarkomi duomenys, jei buvo atsiustas json failas
// app.use(bodyParser.json());

// arba galim naudoti express.json(), nes nereiketu siustis net bodyparserio, nes jis yra express
app.use(express.json());

// i visus response headerius ikeliame CORS nurodymus
app.use(corsHeaders);

app.use("/img", express.static(path.join("./img")));

app.use('/skaiciuokle', skaiciuokleRouter);
app.use('/products', productsRouter);
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/orders', ordersRouter);


export {app};