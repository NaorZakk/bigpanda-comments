FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm run setup
# RUN npm install
# RUN npx install-migrate
# RUN npm install nodemon -g


COPY . .

CMD ["npm", "start"]