import mongoose, { Schema, Document } from 'mongoose';


// Interface para um ponto individual
interface IPonto {
  id: number | string;
  x: number;
  y: number;
}

// Interface para o conjunto de pontos armazenado no MongoDB
export interface IPontoEntrega extends Document {
  pontos: IPonto[];
  dataCriacao: Date;
}

// Schema de um ponto individual
const pontoSchema = new Schema({
  id: { type: Schema.Types.Mixed, required: true },
  x: { type: Number, required: true },
  y: { type: Number, required: true }
});

// Schema do conjunto de pontos
const PontoEntregaSchema = new Schema<IPontoEntrega>({
  pontos: {
    type: [pontoSchema],
    required: true
  },
  dataCriacao: {
    type: Date,
    default: Date.now
  }
});

// Exportando o modelo
const PontoEntregaModel = mongoose.model<IPontoEntrega>('PontoEntrega', PontoEntregaSchema);
export default PontoEntregaModel;



const pontosDeEntrega = [
  { id: 1, x: -22.9068, y: -43.1729 },
  { id: 2, x: -23.5505, y: -46.6339 },
  { id: 3, x: -22.0030, y: -44.0040 },
  { id: 4, x: -22.9332, y: -43.2096 }, 
  { id: 5, x: -23.1200, y: -44.5200 }
];
