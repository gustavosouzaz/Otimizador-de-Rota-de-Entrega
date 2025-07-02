import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RotasController } from './rotas.controller';
import { RotasService } from './rotas.service';
import { Rota, RotaSchema } from './schemas/rota.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rota.name, schema: RotaSchema }]),
  ],
  controllers: [RotasController],
  providers: [RotasService],
})
@Module({
  providers: [RotasService],
  controllers: [RotasController],
})
export class RotasModule {}
