import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './profile.entity';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profilesRepository: Repository<Profile>,
  ) {}

  create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const profile = this.profilesRepository.create(createProfileDto);
    return this.profilesRepository.save(profile);
  }

  findOne(id: string): Promise<Profile> {
    return this.profilesRepository.findOne({ where: { id } });
  }

  async update(id: string, updateProfileDto: UpdateProfileDto): Promise<Profile> {
    await this.profilesRepository.update(id, updateProfileDto);
    return this.profilesRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.profilesRepository.delete(id);
  }
}