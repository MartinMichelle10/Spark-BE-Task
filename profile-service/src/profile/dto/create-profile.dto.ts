import { IsString, IsNumber, IsArray, MinLength, Max, Min } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  user_id: string;

  @IsString()
  @MinLength(2)
  name: string;

  @IsNumber()
  @Min(18)
  @Max(120)
  age: number;

  @IsString()
  bio: string;

  @IsArray()
  @IsString({ each: true })
  interests: string[];
}