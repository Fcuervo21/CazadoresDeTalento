import express from 'express';
import { getContratos, showCreateContrato, createContrato, deleteContrato, rateCazador, rateTalento } from '../controllers/contrato.js';

const router = express.Router();

// Ruta inicial
router.get('/mostrarContratos', getContratos);
router.post('/deleteContrato', deleteContrato);

router.get('/crearContrato', showCreateContrato);
router.post('/crearContrato', createContrato);

router.post('/rateCazador', rateCazador);
router.post('/rateTalento', rateTalento);




export default router;