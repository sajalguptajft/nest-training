import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.getUsers();
  }

  @Get('/:index')
  getUser(@Param('index', new ParseIntPipe()) index: number) {
    return this.userService.getUsers(index);
  }

  @Post()
  addUser(@Body() userDto: UserDto) {
    return this.userService.addUsers(userDto);
  }

  @Delete('/:id')
  deleteUser(@Param('id', new ParseIntPipe()) id: number) {
    return this.userService.deleteUser(id);
  }
}
