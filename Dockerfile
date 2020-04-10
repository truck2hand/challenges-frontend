FROM node:12.16.1-alpine as builder

ENV NODE_ENV build

RUN apk add --no-cache make gcc g++ python

USER node
WORKDIR /home/node

COPY . /home/node

RUN npm ci && npm run build

# ---

FROM node:12.16.1-alpine

ENV NODE_ENV production

USER node
WORKDIR /home/node

COPY --from=builder /home/node/package*.json /home/node/
COPY --from=builder /home/node/server/ /home/node/server/
COPY --from=builder /home/node/public/ /home/node/public/
COPY --from=builder /home/node/.next/ /home/node/.next/

RUN npm ci --production --silent

EXPOSE 3000

CMD ["npm", "start"]
