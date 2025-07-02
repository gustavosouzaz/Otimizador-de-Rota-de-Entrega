import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type HistoricoRotaDocument = HistoricoRota & Document;

@Schema()
export class HistoricoRota {
  @Prop({ required: true })
  grupoId: string;

  @Prop({ type: [Types.ObjectId], ref: 'Ponto' })
  pontosOrdenados: Types.ObjectId[];

  @Prop({ required: true })
  distanciaTotal: number;

  @Prop({ default: Date.now })
  dataGeracao: Date;
}

export const HistoricoRotaSchema = SchemaFactory.createForClass(HistoricoRota);
