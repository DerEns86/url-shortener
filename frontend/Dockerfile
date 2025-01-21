FROM node:20 AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable

RUN apt-get update && apt-get install -y bash

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build-stage /app/dist/frontend /usr/share/nginx/html

EXPOSE 80
