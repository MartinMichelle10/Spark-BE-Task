# Dating App API Gateway

This is the API Gateway for our Dating App microservices architecture. It serves as the single entry point for all client requests, routing them to the appropriate microservices.

## Features

- Request routing to microservices
- Authentication middleware
- Rate limiting
- Logging

## Prerequisites

- Node.js (v14 or later)
- npm
- RabbitMQ

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-repo/api-gateway.git
   cd api-gateway
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add:
   ```
   RABBITMQ_URL=amqp://localhost:5672
   PORT=3000
   ```

4. Start the service:
   ```
   npm run start:dev
   ```

## API Endpoints

- `/users` - User service endpoints
- `/profiles` - Profile service endpoints
- `/recommendations` - Recommendation service endpoints
- `/matches` - Matching service endpoints

## Running Tests
