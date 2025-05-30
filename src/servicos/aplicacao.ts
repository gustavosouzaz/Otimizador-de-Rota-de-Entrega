import { otimizarRota } from "./servicoOtimizacaoRotas";
import express from 'express';
import router from '../routes/rotas';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
// Conexão com MongoDB
const mongoURL = process.env.MONGO_URI || 'mongodb://localhost:27017/rotasdb';

mongoose.connect(mongoURL)
  .then(() => console.log('🟢 Conectado ao MongoDB'))
  .catch((err) => console.error('🔴 Erro ao conectar no MongoDB:', err));


//fazendo a exportação direto no arquivo.
const app = express();
app.use(express.json());
app.use('/', router);


// Exemplo de rota de teste
app.get('/', (req, res) => {
  res.send('API Otimizador de Rotas funcionando!');
});

export default app;
// Dados dos pontos de entrega
const pontosDeEntrega = [
  { id: 1, x: -22.9068, y: -43.1729 },
  { id: 2, x: -23.5505, y: -46.6339 },
  { id: 3, x: -22.0030, y: -44.0040 },
  { id: 4, x: -22.9332, y: -43.2096 },
  { id: 5, x: -23.1200, y: -44.5200 }
];

// Executa a otimização da rota
const resultado = otimizarRota(pontosDeEntrega);

// Exibe o resultado no terminal
console.log("Ordem de entrega:", resultado.ordem);
console.log("Distância total da rota:", resultado.distanciaTotal.toFixed(2));



