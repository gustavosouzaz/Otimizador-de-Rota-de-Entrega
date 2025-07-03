import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RotasController } from './rotas.controller';
import { RotasService } from './rotas.service';
import { Rota, RotaSchema } from './schemas/rota.schema';
import {
  HistoricoRota,
  HistoricoRotaSchema,
} from '../historico/schemas/historico-rota.schema';
import { PontoModule } from '../pontos/pontos.module'; // ✅ Corrigido nome do módulo

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Rota.name, schema: RotaSchema },
      { name: HistoricoRota.name, schema: HistoricoRotaSchema },
    ]),
    PontoModule, // ✅ Importado para disponibilizar o PontoModel
  ],
  controllers: [RotasController],
  providers: [RotasService],
})
export class RotasModule {}
