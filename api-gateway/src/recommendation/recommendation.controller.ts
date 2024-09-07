import { Controller, Get, Param, Inject, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RateLimitGuard } from '../rate-limit/rate-limit.guard';

@Controller('recommendations')
@UseGuards(RateLimitGuard)
export class RecommendationController {
  constructor(@Inject('RECOMMENDATION_SERVICE') private recommendationService: ClientProxy) {}

  @Get(':userId')
  getRecommendations(@Param('userId') userId: string) {
    return this.recommendationService.send({ cmd: 'get_recommendations' }, userId);
  }
}