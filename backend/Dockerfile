FROM node:lts-alpine

RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app
WORKDIR /usr/src/app

USER node

# global npm deps
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

ENV PATH=/usr/src/app/node_modules/.bin:$PATH

COPY --chown=node:node package*.json ./
RUN npm install

COPY --chown=node:node . .

ARG PORT

ENV PORT=$PORT

# Default to production
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ENTRYPOINT [ "npm", "run", "start:prod" ]
