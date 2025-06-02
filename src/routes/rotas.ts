import express from 'express';
import { salvarPontos, buscarPontosPorId } from '../controles/rotaControles';

const router = express.Router();

router.post('/pontos', salvarPontos);
router.get('/pontos/:id', buscarPontosPorId);

export default router;