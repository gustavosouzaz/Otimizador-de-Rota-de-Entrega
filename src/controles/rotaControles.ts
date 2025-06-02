// rotaControles.ts
import { Request, Response } from 'express';
import PontoEntregaModel from '../modelos/PontoEntrega';

export const salvarPontos = async (req: Request, res: Response) => {
  try {
    const { pontos } = req.body;

    const novoDocumento = new PontoEntregaModel({ pontos });
    await novoDocumento.save();

    res.status(201).json({ mensagem: 'Pontos salvos com sucesso!' });
  } catch (erro) {
    console.error('Erro ao salvar pontos:', erro);
    res.status(500).json({ erro: 'Erro ao salvar pontos.' });
  }
};


