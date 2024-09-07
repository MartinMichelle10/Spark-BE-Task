import { IsString, IsNumber, Min, Max } from 'class-validator';

export class CreateRecommendationDto {
  @IsString()
  userId: string;

  @IsString()
  recommendedUserId: string;

  @IsNumber()
  @Min(0)
  @Max(1)
  score: number;
}