# Base image
FROM node:14-alpine

# Install RabbitMQ client
RUN apk add --no-cache rabbitmq-c-dev

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the application
RUN npm run build

# Remove devDependencies
RUN npm prune --production

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/main"]