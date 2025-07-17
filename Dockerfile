FROM node:alpine AS build
WORKDIR /app

COPY . .

RUN yarn
RUN yarn generate

FROM nginx:alpine
WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist/* .

EXPOSE 80
