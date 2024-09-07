"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.connectMicroservice({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [configService.get('RABBITMQ_URL') || 'amqp://localhost:5672'],
            queue: 'profile_queue',
            queueOptions: {
                durable: false
            },
        },
    });
    await app.startAllMicroservices();
    await app.listen(configService.get('PORT') || 3000);
}
bootstrap();
