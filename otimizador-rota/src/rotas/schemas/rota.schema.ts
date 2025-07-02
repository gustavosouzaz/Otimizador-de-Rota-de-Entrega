import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RotaDocument = Rota & Document;

@Schema({ timestamps: true })
export class Rota {
  @Prop({ type: [{ latitude: Number, longitude: Number }], required: true })
  pontos: { latitude: number; longitude: number }[];

  @Prop({ type: [{ latitude: Number, longitude: Number }], required: true })
  ordem: { latitude: number; longitude: number }[];

  @Prop({ required: true })
  distanciaTotal: number;

  @Prop({ default: Date.now })
  dataCriacao: Date;
}

export const RotaSchema = SchemaFactory.createForClass(Rota);
