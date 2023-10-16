import { randomUUID } from 'crypto';

export class Anouncement {
  readonly id: string;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  km: number;
  color: string;
  fipe: number | null;
  price: number;
  description: string;
  adStatus: boolean;
  user_id: string;

  constructor() {
    this.id = randomUUID();
  }
}
