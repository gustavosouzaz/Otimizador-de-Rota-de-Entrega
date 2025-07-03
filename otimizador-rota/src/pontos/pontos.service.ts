import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ponto, PontoDocument } from './ponto.schema';
import { CreatePontoDto } from './dto/criar-pontos.dto';

@Injectable()
export class PontosService {
  constructor(
    @InjectModel(Ponto.name)
    private readonly pontoModel: Model<PontoDocument>,
  ) {}

  async criarPontos(pontos: CreatePontoDto[]): Promise<Ponto[]> {
    return this.pontoModel.insertMany(pontos);
  }
}
