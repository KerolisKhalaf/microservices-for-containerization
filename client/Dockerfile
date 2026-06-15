FROM node:18-alpine AS builder

WORKDIR /app

COPY client/package.json ./

RUN npm install

COPY client .

RUN npm run build

FROM nginx:alpine

EXPOSE 3000

COPY ../nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html