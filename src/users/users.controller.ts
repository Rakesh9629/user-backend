import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    try {
      return await this.usersService.addUser(user);
    } catch (error) {
      throw error;
    }
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
