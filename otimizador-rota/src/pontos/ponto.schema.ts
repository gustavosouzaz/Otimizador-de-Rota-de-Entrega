import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PontoDocument = Ponto & Document;

@Schema()
export class Ponto {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  x: number;

  @Prop({ required: true })
  y: number;
}

export const PontoSchema = SchemaFactory.createForClass(Ponto);
