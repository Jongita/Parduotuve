import express, { Application, Request, Response } from "express";

import { app } from "./app";

import { skaiciuokleRouter } from "./routes/skaiciuokle.router";


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

app.listen(3999, ()=>{
    console.log("express paleistas");
})
