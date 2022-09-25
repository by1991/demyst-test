FROM node:16

RUN mkdir -p /usr/src/demyst/frontend
WORKDIR /usr/src/demyst/frontend

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]