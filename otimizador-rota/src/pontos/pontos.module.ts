import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Ponto, PontoSchema } from './ponto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ponto.name, schema: PontoSchema }]),
  ],
})
export class PontoModule {}
