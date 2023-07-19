# Node.js imajını kullan
FROM node:14-alpine

# Uygulama dosyalarının kopyalanacağı çalışma dizinini belirle
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama kaynak kodunu kopyala
COPY . .

# Uygulamayı çalıştır
CMD ["npm", "run", "serve"]


# 3000 portunu dışarıya aç
EXPOSE 3000
