import express from 'express';
import bodyParser from 'body-parser';
const urlencodedParser = bodyParser.urlencoded({ extended: false });

import { showCreateProyecto, createProyecto, getProyectos, getProyectosCazador, updateProyecto, deleteProyecto } from '../controllers/proyectos.js';
// import { showTalento, createTalento, getTalento, deleteTalento, updateTalento  } from '../controllers/talento.js';

const router = express.Router();

// Ruta inicial
router.get('/crearProyecto', showCreateProyecto);
router.post('/crearProyecto', urlencodedParser , createProyecto);

router.get('/mostrarProyectos', getProyectos);
router.get('/mostrarProyectosCazador', getProyectosCazador);

router.post('/updateProyecto', updateProyecto);
router.post('/deleteProyecto', deleteProyecto);

export default router;