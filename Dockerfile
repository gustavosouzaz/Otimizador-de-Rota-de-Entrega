FROM node:20

WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala todas as dependências (inclusive devDependencies)
RUN npm install --legacy-peer-deps

# Copia o restante do projeto
COPY . .

# Compila o projeto (sem tentar compilar arquivos de teste se estiver configurado no tsconfig.build.json)
RUN npm run build

# Expõe a porta
EXPOSE 3000

# Comando para iniciar o app em produção
CMD ["npm", "run", "start:prod"]
