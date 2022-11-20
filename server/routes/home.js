import express from 'express';
import { getHome, getCazador, getTalento } from '../controllers/home.js';

const router = express.Router();

router.get('/', getHome);
router.get('/cazadorHome', getCazador);
router.get('/talentoHome', getTalento);

export default router;