import { PartialType } from '@nestjs/mapped-types';
import { CreatePontoDto } from './criar-pontos.dto';

export class AtualizarPontoDto extends PartialType(CreatePontoDto) {}
