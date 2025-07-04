import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PontoDocument = Ponto & Document;

@Schema()
export class Ponto {
  @Prop({ required: true })
  x: number;

  @Prop({ required: true })
  y: number;

  @Prop({ required: true })
  grupoId: string;
}

export const PontoSchema = SchemaFactory.createForClass(Ponto);
