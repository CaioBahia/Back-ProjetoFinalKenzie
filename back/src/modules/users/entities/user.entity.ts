import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: Date;
  type: string;
  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
  }
}
