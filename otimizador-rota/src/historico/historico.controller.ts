import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  HistoricoRota,
  HistoricoRotaDocument,
} from './schemas/historico-rota.schema';

@Controller('historico')
export class HistoricoController {
  constructor(
    @InjectModel(HistoricoRota.name)
    private readonly historicoModel: Model<HistoricoRotaDocument>,
  ) {}

  @Get(':grupoId')
  async buscarPorGrupoId(
    @Param('grupoId') grupoId: string,
  ): Promise<HistoricoRota[]> {
    const historico = await this.historicoModel.find({ grupoId }).exec();

    if (!historico.length) {
      throw new NotFoundException(
        'Nenhum histórico encontrado para esse grupo.',
      );
    }

    return historico;
  }
}
