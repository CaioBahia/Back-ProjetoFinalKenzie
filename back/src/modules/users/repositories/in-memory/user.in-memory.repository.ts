import { plainToInstance } from 'class-transformer';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { UsersRepository } from '../user.repository';

export class UsersInMemoryRepository implements UsersRepository {
  private database: User[] = [];
  async create(data: CreateUserDto): Promise<User> {
    const newUser = new User();
    Object.assign(newUser, {
      ...data,
    });
    this.database.push(newUser);
    return plainToInstance(User, newUser);
  }
  async findAll(): Promise<User[]> {
    return plainToInstance(User, this.database);
  }
}
