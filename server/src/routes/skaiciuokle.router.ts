import express from 'express';
import { SkaiciuokleController } from '../controllers/skaiciuokle.controller.js';
const skaiciuokleRouter=express.Router();

skaiciuokleRouter.get('/skaiciuoti', SkaiciuokleController.apskaiciuoti);


export {skaiciuokleRouter};