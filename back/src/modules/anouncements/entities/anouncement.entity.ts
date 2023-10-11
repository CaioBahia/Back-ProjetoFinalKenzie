import { randomUUID } from 'crypto';

export class Anouncement {
  readonly id: string;
  brand: string;
  model: string;
  year: number;
  fuel: string;
  km: number;
  color: string;
  fipe?: number;
  price: number;
  description: string;
  adStatus: string;
  user_id?: string;

  constructor() {
    this.id = randomUUID();
  }
}
