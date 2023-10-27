import { CreateImageDto } from '../dto/create-image.dto';
import { Image } from '../entities/image.entity';

export abstract class ImagesRepository {
  abstract create(data: CreateImageDto, anouncement_id: string): Promise<Image>;
  abstract findByAd(anouncement_id: string): Promise<Image[]>;
  abstract remove(id: string): Promise<void>;
}
