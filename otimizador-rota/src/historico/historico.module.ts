import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HistoricoController } from './historico.controller';
import { HistoricoService } from './historico.service';

import {
  HistoricoRota,
  HistoricoRotaSchema,
} from './schemas/historico-rota.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: HistoricoRota.name,
        schema: HistoricoRotaSchema,
      },
    ]),
  ],
  controllers: [HistoricoController],
  providers: [HistoricoService],
  exports: [MongooseModule], // exporta para ser usado em outros serviços como RotasService
})
export class HistoricoModule {}
