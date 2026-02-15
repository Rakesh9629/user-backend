import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: any[] = [];
  private idCounter = 1;

  getUsers() {
    return this.users;
  }

  addUser(user) {
    const newUser = { id: this.idCounter++, ...user };
    this.users.push(newUser);
    return newUser;
  }

  deleteUser(id: number) {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) return null;
    return this.users.splice(index, 1)[0];
  }

  updateUser(id: number, user) {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) return null;
    this.users[index] = { id, ...user };
    return this.users[index];
  }
}
