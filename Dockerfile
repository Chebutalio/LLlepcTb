FROM node:10.19.0-alpine3.9

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm install

CMD npm start -- --host 0.0.0.0 --disable-host-check
