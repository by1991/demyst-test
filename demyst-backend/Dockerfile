FROM node:16

RUN mkdir -p /usr/src/demyst/backend
WORKDIR /usr/src/demyst/backend

COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm", "start"]