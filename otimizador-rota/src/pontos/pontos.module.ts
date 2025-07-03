import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Ponto, PontoSchema } from './ponto.schema';
import { PontosService } from './pontos.service';
import { PontosController } from './pontos.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ponto.name, schema: PontoSchema }]),
  ],
  controllers: [PontosController],
  providers: [PontosService],
  exports: [MongooseModule],
})
export class PontoModule {}
