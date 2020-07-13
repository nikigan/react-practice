FROM node:12

ENV PORT=3000
ENV CI=true

WORKDIR /app

COPY package*.json /app/

RUN npm install

EXPOSE 3000