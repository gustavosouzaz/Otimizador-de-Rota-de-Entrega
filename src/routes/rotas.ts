import express from 'express';
import { salvarPontos } from '../controles/rotaControles';

const router = express.Router();

router.post('/pontos', salvarPontos);

export default router;
