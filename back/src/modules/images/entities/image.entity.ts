import { randomUUID } from 'crypto';

export class Image {
  readonly id: string;
  img_url: string;
  anouncement_id: string;

  constructor() {
    this.id = randomUUID();
  }
}
