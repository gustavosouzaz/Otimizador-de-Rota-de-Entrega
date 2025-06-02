import express from 'express';
import { buscarPontosPorId, salvarPontos, buscarRotaPorId } from '../controles/rotaControles';

const router = express.Router();

router.post('/pontos', salvarPontos);
router.get('/pontos/:id', buscarPontosPorId);
router.get('/rota/:id', buscarRotaPorId);
export default router;
