import { Router } from "express";
import { getPreguntas, saveDatos , getData } from "../controllers/formulario.controller.js";

const router = Router();

router.get('/pregunta', getPreguntas);
router.post('/save', saveDatos);
router.get('/data', getData);

export default router;