import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PontoModule } from './pontos/pontos.module';
import { RotasModule } from './rotas/rotas.module';
import { HistoricoModule } from './historico/historico.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/'),
    PontoModule,
    RotasModule,
    HistoricoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
