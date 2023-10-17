import { randomUUID } from 'crypto';

export class Address {
  readonly id: string;
  zipcode: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;
  user_id: string;
  constructor() {
    this.id = randomUUID();
  }
}
