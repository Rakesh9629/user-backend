import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getUsers() {
    return this.prisma.user.findMany();
  }

  addUser(user) {
    return this.prisma.user.create({ data: user });
  }

  deleteUser(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }

  updateUser(id: number, user) {
    return this.prisma.user.update({ where: { id }, data: user });
  }
}