import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';

import { ImagesRepository } from './repositories/images.repository';

@Injectable()
export class ImagesService {
  constructor(private imagesRepository: ImagesRepository) {}

  async create(data: CreateImageDto, anouncement_id: string) {
    const image = await this.imagesRepository.create(data, anouncement_id);
    console.log(image);
    return image;
  }

  async findByAd(anouncement_id: string) {
    const images = await this.imagesRepository.findByAd(anouncement_id);
    return images;
  }

  async remove(id: string) {
    await this.imagesRepository.remove(id);
  }
}
