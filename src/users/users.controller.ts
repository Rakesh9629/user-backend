import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  createUser(@Body() user) {
    return this.usersService.addUser(user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(+id);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user) {
    return this.usersService.updateUser(+id, user);
  }
}
