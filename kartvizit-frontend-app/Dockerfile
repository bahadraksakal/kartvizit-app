FROM node:16.14.2-alpine3.15

WORKDIR /app

COPY package*.json ./

RUN npm install -g @angular/cli && npm install

COPY . .

CMD ["ng", "serve", "--host", "0.0.0.0"]

EXPOSE 4200
