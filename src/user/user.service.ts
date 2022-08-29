import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(private connection: DataSource) {}

  getUsers(index?: number) {
    return this.connection.getRepository(User).find(
      index
        ? {
            where: {
              id: index,
            },
          }
        : {},
    );
  }

  addUsers(userDto: UserDto) {
    return this.connection.getRepository(User).save({
      firstName: userDto.firstName,
      lastName: userDto.lastName,
    });
  }

  deleteUser(id: number) {
    return this.connection.getRepository(User).delete(id);
  }
}
