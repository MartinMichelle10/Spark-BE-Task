import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RecommendationService } from './recommendation.service';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';

@Controller()
export class RecommendationController {
  constructor(private readonly recommendationService: RecommendationService) {}

  @MessagePattern({ cmd: 'get_recommendations' })
  getRecommendations(@Payload() userId: string) {
    return this.recommendationService.getRecommendations(userId);
  }

  @MessagePattern({ cmd: 'create_recommendation' })
  createRecommendation(@Payload() createRecommendationDto: CreateRecommendationDto) {
    return this.recommendationService.create(createRecommendationDto);
  }
}