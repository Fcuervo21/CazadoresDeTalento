import express from 'express';
import { showTalento, createTalento, getTalento, deleteTalento, updateTalento  } from '../controllers/talento.js';

const router = express.Router();

// Ruta inicial
router.get('/crearTalento', showTalento);
router.post('/crearTalento', createTalento);

export default router;