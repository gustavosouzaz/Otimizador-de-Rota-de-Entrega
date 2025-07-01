import {
  IsNumber,
  IsNotEmpty,
  ValidateNested,
  ArrayNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePontoDto {
  @IsNotEmpty()
  @IsNumber()
  latitude: number;

  @IsNotEmpty()
  @IsNumber()
  longitude: number;
}

export class CreatePontosDto {
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreatePontoDto)
  pontos: CreatePontoDto[];
}
