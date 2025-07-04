import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PontoModule } from './pontos/pontos.module';
import { RotasModule } from './rotas/rotas.module';
import { HistoricoModule } from './historico/historico.module';
import { AuthModule } from './auth/auth.module'; // ✅ importado

@Module({
  imports: [
    // ✅ Configuração global do .env
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // ✅ Conexão MongoDB com fallback e formatação corrigida
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri:
          configService.get<string>('MONGO_URI') ||
          'mongodb://localhost:27017/rotasdb',
      }),
      inject: [ConfigService],
    }),

    // ✅ Módulos da aplicação
    PontoModule,
    RotasModule,
    HistoricoModule,
    AuthModule, // 👈 incluído para corrigir erro "jwt strategy"
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
