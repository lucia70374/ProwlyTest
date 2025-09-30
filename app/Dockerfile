FROM node:18

WORKDIR /usr/src/app

# Install curl for the healthcheck
RUN apt-get update && apt-get install -y curl

COPY package*.json ./
RUN npm ci
COPY . .

# Run your application
CMD ["node", "app.js"]
