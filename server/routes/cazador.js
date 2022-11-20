import express from 'express';
import { showCazador, createCazador, getCazador, deleteCazador, updateCazador  } from '../controllers/cazador.js';

const router = express.Router();

// Ruta inicial
router.get('/crearCazador', showCazador);


router.post('/crearCazador', createCazador);
// router.delete('/:id', deleteCazador);
// router.put('/:id', updateCazador);

export default router;