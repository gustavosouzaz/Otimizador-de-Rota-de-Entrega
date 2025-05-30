import { Request, Response } from 'express';
import PontoEntrega from '../modelos/PontoEntrega'; 

export async function salvarPontos(req: Request, res: Response) {
  try {
    const pontos = req.body;

    // Salva os pontos no MongoDB
    const doc = await PontoEntrega.create({ pontos });

    res.status(201).json({ id: doc._id });
  } catch (error) {
  console.error('Erro ao salvar pontos:', error); 
  res.status(500).json({ error: 'Erro ao salvar pontos.' });
}
}

