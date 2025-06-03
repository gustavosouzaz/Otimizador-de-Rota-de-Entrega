import mongoose from 'mongoose';

const RotaCalculadaSchema = new mongoose.Schema({
  grupoId: {
    type: String,
    required: true,
  },
  ordemRota: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PontoEntrega',
      required: true,
    },
  ],
  distanciaTotal: {
    type: Number,
    required: true,
  },
  calculadoEm: {
    type: Date,
    default: Date.now,
  },
});

export const RotaCalculadaModel = mongoose.model('RotaCalculada', RotaCalculadaSchema);
