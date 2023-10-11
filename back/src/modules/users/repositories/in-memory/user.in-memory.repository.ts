import { plainToInstance } from 'class-transformer';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { UsersRepository } from '../user.repository';
import { UpdateUserDto } from '../../dto/update-user.dto';

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

  async findById(id: string): Promise<User> {
    const user = this.database.find((user) => user.id === id);
    return plainToInstance(User, user);
  }

  async update(data: UpdateUserDto, id: string): Promise<User> {
    const userIndex = this.database.findIndex((user) => user.id === id);
    this.database[userIndex] = {
      ...this.database[userIndex],
      ...data,
    };

    return plainToInstance(User, this.database[userIndex]);
  }

  async remove(id: string): Promise<void> {
    const userIndex = this.database.findIndex((user) => user.id === id);
    this.database.splice(userIndex, 1);
  }
}
