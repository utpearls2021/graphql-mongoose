import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from "./users.service";
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getAll();
  }

  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.userService.create(userDto);
  }

}

