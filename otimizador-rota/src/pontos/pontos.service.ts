import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ponto, PontoDocument } from './ponto.schema';

@Injectable()
export class PontosService {
  constructor(
    @InjectModel(Ponto.name)
    private readonly pontoModel: Model<PontoDocument>,
  ) {}

  // métodos virão aqui!
}
