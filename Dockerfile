FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# 앱 소스 추가
COPY . .

EXPOSE 3000

CMD [ "NODE_ENV=production","node", "app.js" ]