import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import { app } from "./app";

import { skaiciuokleRouter } from "./routes/skaiciuokle.router";

// uzkrauname .env biblioteka, ir paimami kintamieji
dotenv.config();



console.log("serveris paleistas");

// const app: Application=express();

// app.use('/', skaiciuokleRouter);


// app.get('/antras', (req:Request, res:Response, next:any)=>{
//     console.log("Uzsikrove antras middleware");
//      res.send("antras URL")

// })

// app.use('/trecias', (req:Request, res:Response, next:any)=>{
//     console.log("Uzsikrove trecias middleware");
//     res.send("trecias URL")

// })

// app.use('/', (req:Request, res:Response, next:any)=>{
//     // res.send("Express.JS veikia")
//     console.log("Uzsikrove pirmas middleware");
//      res.send("pagrindinis URL")
// })

//Paleidžiame serverį ant PORTO kuris nurodytas process.env.PORT .env faile
app.listen(process.env.PORT, ()=>{
    console.log("Express serveris paleistas, ant uosto: "+process.env.PORT);
})