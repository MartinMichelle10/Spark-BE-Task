import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recommendation } from './recommendation.entity';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';

@Injectable()
export class RecommendationService {
  constructor(
    @InjectRepository(Recommendation)
    private recommendationsRepository: Repository<Recommendation>,
  ) {}

  async getRecommendations(userId: string): Promise<Recommendation[]> {
    // Implement your recommendation logic here
    // This is a simple example that returns all recommendations
    return this.recommendationsRepository.find();
  }

  create(createRecommendationDto: CreateRecommendationDto): Promise<Recommendation> {
    const recommendation = this.recommendationsRepository.create(createRecommendationDto);
    return this.recommendationsRepository.save(recommendation);
  }
}