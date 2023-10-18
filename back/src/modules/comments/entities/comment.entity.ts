import { randomUUID } from 'crypto';

export class Comment {
  readonly id: string;
  text: string;
  user_id: string;
  anouncement_id: string;

  constructor() {
    this.id = randomUUID();
  }
}
