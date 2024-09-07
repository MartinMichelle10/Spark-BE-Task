import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'get_user' })
  getUser(@Payload() id: string) {
    return this.userService.findOne(id);
  }

  @MessagePattern({ cmd: 'create_user' })
  createUser(@Payload() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}