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

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

# for some reason that only god knows, I need to overwrite the .env file since nextjs doesn't read the env vars according to the NODE_ENV
COPY --chown=node:node .env.${NODE_ENV} .env

ARG PORT
ENV PORT $PORT


RUN npm run build

ENTRYPOINT [ "npm", "run", "start" ]
