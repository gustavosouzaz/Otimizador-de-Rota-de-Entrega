import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ponto, PontoDocument } from './ponto.schema';
import { CreatePontosDto } from './dto/criar-pontos.dto';

@Injectable()
export class PontosService {
  constructor(
    @InjectModel(Ponto.name)
    private readonly pontoModel: Model<PontoDocument>,
  ) {}

  async criar(
    grupoId: string,
    pontos: CreatePontosDto['pontos'],
  ): Promise<Ponto[]> {
    const pontosComGrupo = pontos.map((ponto) => ({
      x: ponto.x,
      y: ponto.y,
      grupoId: String(grupoId),
    }));

    return this.pontoModel.insertMany(pontosComGrupo);
  }
}
