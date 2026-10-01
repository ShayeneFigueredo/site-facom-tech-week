# ==========================================
# Etapa 1: Build da Aplicação React / Vite
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar dependências aproveitando cache de camadas do Docker
COPY package*.json ./
RUN npm install

# Copiar todo o código-fonte e gerar o build de produção
COPY . .
RUN npm run build

# ==========================================
# Etapa 2: Servidor Web Nginx de Produção
# ==========================================
FROM nginx:alpine AS runner

# Remover configuração padrão do Nginx
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copiar configuração customizada otimizada para SPA e Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar os arquivos estáticos compilados da etapa de build
COPY --from=builder /app/dist /usr/share/nginx/html

# Expor as portas 80 e 443 (HTTP e HTTPS) do container
EXPOSE 80 443

# Iniciar o Nginx em modo foreground
CMD ["nginx", "-g", "daemon off;"]
