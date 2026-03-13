# syntax=docker/dockerfile:1

FROM node:22-alpine AS build

WORKDIR /app

# Native modules (e.g. better-sqlite3) may require build tools.
RUN apk add --no-cache python3 make g++

COPY package.json ./
RUN npm install

COPY . .
RUN npm run build


FROM nginxinc/nginx-unprivileged:1.27-alpine

# Render injects PORT; default locally.
ENV PORT=8080

COPY --from=build /app/dist /usr/share/nginx/html

# Use nginx entrypoint envsubst support:
# /docker-entrypoint.d/20-envsubst-on-templates.sh renders templates from /etc/nginx/templates
COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template

EXPOSE 8080
