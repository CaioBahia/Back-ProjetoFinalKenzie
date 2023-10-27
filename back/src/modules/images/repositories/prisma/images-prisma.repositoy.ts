import { PrismaService } from 'src/modules/database/prisma.service';
import { ImagesRepository } from '../images.repository';
import { Image } from '../../entities/image.entity';
import { CreateImageDto } from '../../dto/create-image.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ImagesPrismaRepository implements ImagesRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateImageDto, anouncement_id: string): Promise<Image> {
    const image = new Image();
    Object.assign(image, { ...data });

    const CreateImage = await this.prisma.images.create({
      data: {
        id: image.id,
        img_url: image.img_url,
        anouncement_id,
      },
    });
    return CreateImage;
  }
  async findByAd(anouncement_id: string): Promise<Image[]> {
    const images = await this.prisma.images.findMany({
      where: { anouncement_id },
    });
    console.log(images);
    return images;
  }
  async remove(id: string): Promise<void> {
    await this.prisma.images.delete({ where: { id } });
  }
}
