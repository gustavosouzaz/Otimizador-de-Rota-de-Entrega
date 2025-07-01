import { Request, Response } from 'express';
import PontoEntregaModel from '../modelos/PontoEntrega';
import { calcularRotaOtimizada } from '../utilitarios/CalculadoraDistancia';

export const salvarPontos = async (req: Request, res: Response) => {
  try {
    const { pontos } = req.body;
    const novoDocumento = new PontoEntregaModel({ pontos });
    await novoDocumento.save();

    res.status(201).json({ mensagem: 'Pontos salvos com sucesso!' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Erro ao salvar pontos:', error.message);
    } else {
      console.error('Erro desconhecido ao salvar pontos:', error);
    }
    res.status(500).json({ erro: 'Erro ao salvar pontos.' });
  }
};

export const buscarPontosPorId = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const documento = await PontoEntregaModel.findById(id);

    if (!documento) {
      res.status(404).json({ erro: 'Documento não encontrado.' });
      return;
    }

    res.json(documento);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Erro ao buscar pontos:', error.message);
    } else {
      console.error('Erro desconhecido ao buscar pontos:', error);
    }
    res.status(500).json({ erro: 'Erro ao buscar pontos.' });
  }
};

export const buscarRotaPorId = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const pontos = await PontoEntregaModel.find({ grupoId: id });

    if (!pontos || pontos.length === 0) {
      res.status(404).json({ error: 'Conjunto de pontos não encontrado.' });
      return;
    }

    const { ordem, distanciaTotal } = calcularRotaOtimizada(pontos);

    res.status(200).json({
      ordemRota: ordem.map(p => p._id),
      distanciaTotal,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Erro ao calcular rota:', error.message);
    } else {
      console.error('Erro desconhecido ao calcular rota:', error);
    }
    res.status(500).json({ error: 'Erro ao calcular rota.' });
  }
};