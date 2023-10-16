import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validadeUser(userEmail: string, userPassword: string) {
    const user = await this.userService.findByEmail(userEmail);
    if (user) {
      const matchPassword = await compare(userPassword, user.password);
      if (matchPassword) {
        return { email: user.email };
      }
    }
    return null;
  }

  async login(email: string) {
    const user = await this.userService.findByEmail(email);
    return {
      token: this.jwtService.sign({ email }, { subject: user.id }),
    };
  }
}
