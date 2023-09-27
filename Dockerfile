FROM node:gallium-alpine

WORKDIR /app

COPY ./package.json .

RUN npm install -f

COPY . .

RUN npm i -g serve

RUN npm run build

EXPOSE 3000

CMD ["npx", "serve", "-s", "build"]