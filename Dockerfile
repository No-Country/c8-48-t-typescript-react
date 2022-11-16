# C8-48 TypeScript NestJS and React with Vite, also POSTGRES as DB

## SERVER BUILD FOR DEVELOPMENT
FROM node:18-alpine AS dev-server

WORKDIR /c8-48-dev-server

COPY --chown=node:node ./server/package.json ./
COPY --chown=node:node ./server/yarn.lock ./

RUN yarn install

COPY --chown=node:node ./server/ ./

USER node

## SERVER DEV
FROM node:18-alpine AS run-server
WORKDIR /server
EXPOSE 3000

COPY --chown=node:node --from=dev-server /c8-48-dev-server/node_modules ./node_modules

USER node

## SERVER BUILD FOR PRODUCTION
FROM node:18-alpine AS build-server

WORKDIR /c8-48-server
ENV NODE_ENV=production

COPY --chown=node:node --from=dev-server /c8-48-dev-server/node_modules ./node_modules
COPY --chown=node:node ./server/ . 

RUN yarn build

RUN yarn install --frozen-lockfile && yarn cache clean

USER node

## SERVER PRODUCTION
FROM node:18-alpine AS server-production

EXPOSE 3000

COPY --chown=node:node --from=build-server /c8-48-server/node_modules ./node_modules
COPY --chown=node:node --from=build-server /c8-48-server/dist ./dist

CMD node dist/main.js
# TODO: let's try to move this one to docker-compose like in https://github.com/thanhpt-25/hrm-backend/blob/master/docker-compose.yml

## CLIENT BUILD FOR DEVELOPMENT
FROM node:18-alpine AS dev-client

WORKDIR /c8-48-dev-client

COPY --chown=node:node ./client/package.json ./
COPY --chown=node:node ./client/yarn.lock ./

RUN yarn install

COPY --chown=node:node ./client/ ./

## CLIENT BUILD FOR PRODUCTION
FROM node:18-alpine AS build-client

WORKDIR /c8-48-client
ENV NODE_ENV=production

COPY --chown=node:node --from=dev-client /c8-48-dev-client/node_modules ./node_modules
COPY --chown=node:node ./client/ .

RUN yarn build

RUN yarn install --frozen-lockfile && yarn cache clean

USER node

## CLIENT DEV
FROM node:18-alpine AS run-client
WORKDIR /client
EXPOSE 3000

COPY --chown=node:node --from=dev-client /c8-48-dev-client/node_modules ./node_modules

USER node

## CLIENT PRODUCTION
FROM nginx:1.22-alpine AS client-production

EXPOSE 80

COPY --from=build-client /c8-48-client/node_modules ./node_modules
COPY --from=build-client /c8-48-client/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
# TODO: let's try to move this one to docker-compose like in https://github.com/thanhpt-25/hrm-backend/blob/master/docker-compose.yml
