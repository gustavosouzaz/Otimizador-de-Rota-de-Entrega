import {
  IsNumber,
  IsNotEmpty,
  ValidateNested,
  ArrayNotEmpty,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePontoDto {
  @IsNotEmpty()
  @IsNumber()
  x: number;

  @IsNotEmpty()
  @IsNumber()
  y: number;
}

export class CreatePontosDto {
  @IsNotEmpty()
  @IsString()
  grupoId: string;

  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreatePontoDto)
  pontos: CreatePontoDto[];
}
