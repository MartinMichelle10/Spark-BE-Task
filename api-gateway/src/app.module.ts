import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthMiddleware } from './auth/auth.middleware';
import { UserController } from './user/user.controller';
import { ProfileController } from './profile/profile.controller';
import { RecommendationController } from './recommendation/recommendation.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.registerAsync([
      {
        name: 'USER_SERVICE',
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.get<string>('RABBITMQ_URL')],
            queue: 'user_queue',
            queueOptions: {
              durable: false
            },
          },
        }),
        inject: [ConfigService],
      },
      // Add similar configurations for other services
    ]),
  ],
  controllers: [
    UserController,
    ProfileController,
    RecommendationController,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('*');
  }
}