FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g @vue/cli
RUN npm install --silent

COPY . .

RUN npm run build

CMD ["./node_modules/.bin/vue-cli-service", "serve"]
