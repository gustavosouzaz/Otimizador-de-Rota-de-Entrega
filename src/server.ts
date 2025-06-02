import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import rotas from './routes/rotas'; 
dotenv.config();

const app = express();
app.use(express.json());
app.use('/api', rotas); 
export default app;

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/otimizador';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Conectado ao MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((erro) => {
    console.error('❌ Erro ao conectar no MongoDB:', erro);
  });