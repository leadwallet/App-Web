FROM node:14-alpine
WORKDIR /app
COPY *.json ./
RUN npm install
COPY . .
EXPOSE $PORT
ENTRYPOINT ["npm", "start"]