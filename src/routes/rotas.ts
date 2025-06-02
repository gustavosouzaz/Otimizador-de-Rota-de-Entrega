import express from 'express';
import { buscarPontosPorId, salvarPontos } from '../controles/rotaControles';

const router = express.Router();

router.post('/pontos', salvarPontos);
router.get('/pontos/:id', buscarPontosPorId);

export default router;
