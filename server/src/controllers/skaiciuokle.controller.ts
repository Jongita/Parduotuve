import { Response } from "express";

export class SkaiciuokleController{
   static apskaiciuoti(req:any, res:any ){
    console.log("Skaiciuojami duomenys");
    const x = parseInt(req.body.x);
    const y = parseInt(req.body.y);
    console.log();
        res.json({
            "rezultatas": (x+y)
        });
   } 
}