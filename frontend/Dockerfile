# Étape 1 : build Angular
FROM node:20 AS build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Étape 2 : serveur nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

