
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma generate

# Sobe o servidor
CMD ["npm", "run", "start:dev"]
