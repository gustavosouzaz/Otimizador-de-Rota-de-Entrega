import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PontoModule } from './pontos/pontos.module';
import { RotasModule } from './rotas/rotas.module';
import { HistoricoModule } from './historico/historico.module';

@Module({
  imports: [
    // ✅ ConfigModule global
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // ✅ Mongoose conectado com variável de ambiente de forma segura
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri:
          configService.get<string>('MONGO_URI') ||
          'mongodb://localhost:27017/rotasdb',
      }),
      inject: [ConfigService],
    }),

    // ✅ Seus módulos principais
    PontoModule,
    RotasModule,
    HistoricoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
