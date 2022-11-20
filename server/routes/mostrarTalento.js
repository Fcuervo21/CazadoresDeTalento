import express from 'express';
import { showAllTalents } from '../controllers/mostrarTalentos.js';

const router = express.Router();

// Ruta inicial
router.get('/', showAllTalents);

export default router;