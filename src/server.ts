// src/server.ts
import app from './servicos/aplicacao';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const PORT = 3000;

mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log("🟢 Conectado ao MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar no MongoDB:", err);
  });
