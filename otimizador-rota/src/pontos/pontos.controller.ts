import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('pontos')
export class PontosController {
  //  métodos (ex: @Post, @Get, etc.)
}
