import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;
  cpf: string;
  phone: number;
  birthdate: Date;
  type: string;
  @Exclude()
  password: string;
  addressID: string;

  constructor() {
    this.id = randomUUID();
  }
}
