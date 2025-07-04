import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PontosService } from './pontos.service';
import { CreatePontosDto } from './dto/criar-pontos.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('pontos')
export class PontosController {
  constructor(private readonly pontosService: PontosService) {}

  @Post()
  async criarPontos(@Body() body: CreatePontosDto) {
    return this.pontosService.criar(body.grupoId, body.pontos);
  }
}
