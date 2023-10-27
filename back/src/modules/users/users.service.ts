import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/user.repository';
import { use } from 'passport';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    const findUser = await this.userRepository.findByEmail(createUserDto.email);

    if (findUser) {
      throw new ConflictException('User Alredy Exists!');
    }

    const user = await this.userRepository.create(createUserDto);
    return user;
  }

  async findAll() {
    const users = await this.userRepository.findAll();
    return users;
  }

  async findById(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundException('User Not Found!');
    }
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email);
    return user;
  }

  async update(data: UpdateUserDto, id: string) {
    const user = await this.userRepository.update(data, id);
    if (!user) {
      throw new NotFoundException('User Not Found!');
    }

    return user;
  }

  async remove(id: string) {
    await this.userRepository.remove(id);
  }
}
