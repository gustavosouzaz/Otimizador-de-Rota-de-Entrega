import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ponto, PontoDocument } from '../pontos/ponto.schema';
import { Rota, RotaDocument } from './schemas/rota.schema';
import { calcularRotaOtimizada } from '../utilitarios/calculadora-distancia';

@Injectable()
export class RotasService {
  constructor(
    @InjectModel(Ponto.name)
    private readonly pontoModel: Model<PontoDocument>,
    @InjectModel(Rota.name)
    private readonly rotaModel: Model<RotaDocument>,
  ) {}

  async gerarRota(grupoId: string): Promise<Rota> {
    const pontos = await this.pontoModel.find({ grupoId }).exec();

    if (!pontos.length) {
      throw new NotFoundException(
        'Nenhum ponto encontrado para o grupo informado.',
      );
    }

    const pontosFormatados = pontos.map((ponto) => {
      const plain = ponto.toObject();
      return {
        ...plain,
        _id: String(ponto._id),
      };
    });

    const { ordem, distanciaTotal } = calcularRotaOtimizada(pontosFormatados);

    const novaRota = new this.rotaModel({
      grupoId,
      pontosOrdenados: ordem.map((p) => p._id),
      distanciaTotal,
      dataCriacao: new Date(),
    });

    return novaRota.save();
  }
}
