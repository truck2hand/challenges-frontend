FROM node:12.14.1-alpine3.10

ENV NODE_ENV=production

ARG project_dir=/app/

WORKDIR /app/

ADD . $project_dir

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
