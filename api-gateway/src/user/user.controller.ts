import { Controller, Get, Post, Body, Param, Inject, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RateLimitGuard } from '../rate-limit/rate-limit.guard';

@Controller('users')
@UseGuards(RateLimitGuard)
export class UserController {
  constructor(@Inject('USER_SERVICE') private userService: ClientProxy) {}

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.send({ cmd: 'get_user' }, id);
  }

  @Post()
  createUser(@Body() createUserDto: any) {
    return this.userService.send({ cmd: 'create_user' }, createUserDto);
  }
}