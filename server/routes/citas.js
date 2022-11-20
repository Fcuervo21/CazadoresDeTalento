import express from 'express';
import { createCitaTalentoCazador, createCitaCazadorTalento, getCitas, updateCita, deleteCita } from '../controllers/citas.js';


const router = express.Router();

// Ruta inicial
router.post('/crearCitaTalentoCazador', createCitaTalentoCazador);
router.post('/crearCitaCazadorTalento', createCitaCazadorTalento);
router.get('/mostrarCitas', getCitas);
router.post('/updateCita', updateCita);
router.post('/deleteCita', deleteCita);

export default router;