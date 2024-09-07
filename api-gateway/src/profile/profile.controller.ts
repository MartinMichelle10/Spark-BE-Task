import { Controller, Get, Put, Body, Param, Inject, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RateLimitGuard } from '../rate-limit/rate-limit.guard';

@Controller('profiles')
@UseGuards(RateLimitGuard)
export class ProfileController {
  constructor(@Inject('PROFILE_SERVICE') private profileService: ClientProxy) {}

  @Get(':id')
  getProfile(@Param('id') id: string) {
    return this.profileService.send({ cmd: 'get_profile' }, id);
  }

  @Put(':id')
  updateProfile(@Param('id') id: string, @Body() updateProfileDto: any) {
    return this.profileService.send({ cmd: 'update_profile' }, { id, ...updateProfileDto });
  }
}