import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PontosService } from './pontos.service';
import { CreatePontosDto } from './dto/criar-pontos.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('pontos')
export class PontosController {
  constructor(private readonly pontosService: PontosService) {}

  @Post()
  async criarPontos(@Body() createPontosDto: CreatePontosDto) {
    return this.pontosService.criarPontos(createPontosDto.pontos); // ⬅ nome do método corrigido
  }
}
