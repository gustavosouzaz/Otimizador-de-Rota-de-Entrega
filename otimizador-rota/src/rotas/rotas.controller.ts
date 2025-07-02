import {
  Controller,
  Get,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { RotasService } from './rotas.service';
import { Rota } from './schemas/rota.schema';

@Controller('rotas')
export class RotasController {
  constructor(private readonly rotasService: RotasService) {}

  // [GET] /rotas/:id → Gera ou retorna uma rota otimizada por grupoId
  @Get(':id')
  async gerarRota(@Param('id') grupoId: string): Promise<Rota> {
    return this.rotasService.gerarRota(grupoId);
  }

  // [GET] /rotas/historico → Lista todas as rotas salvas
  @Get('historico')
  async listarRotas(): Promise<Rota[]> {
    return this.rotasService.listarRotas();
  }

  // [DELETE] /rotas/:id → Remove uma rota salva por ID
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deletarRota(@Param('id') id: string): Promise<void> {
    await this.rotasService.deletarRota(id);
  }
}
