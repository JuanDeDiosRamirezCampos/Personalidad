import { Router } from "express";
import { getPreguntas, saveDatos } from "../controllers/formulario.controller.js";

const router = Router();

router.get('/pregunta', getPreguntas);
router.post('/save', saveDatos);

export default router;