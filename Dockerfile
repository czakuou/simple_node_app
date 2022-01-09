FROM node:16-bullseye

WORKDIR /app

COPY [ "package.json", "package-lock.json", "./" ]

RUN npm install

COPY . .
