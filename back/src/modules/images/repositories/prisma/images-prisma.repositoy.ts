import { PrismaService } from 'src/modules/database/prisma.service';
import { ImagesRepository } from '../images.repository';
import { Image } from '../../entities/image.entity';
import { CreateImageDto } from '../../dto/create-image.dto';

export class ImagesPrismaRepository implements ImagesRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateImageDto, anouncement_id: string): Promise<Image> {
    const newImage = new Image();
    Object.assign(newImage, { ...data });

    const CreateImage = await this.prisma.images.create({
      data: {
        id: newImage.id,
        img_url: newImage.img_url,
        anouncement_id,
      },
    });
    return CreateImage;
  }
  async findByAd(anouncement_id: string): Promise<Image[]> {
    const images = await this.prisma.images.findMany({
      where: { anouncement_id },
    });
    return images;
  }
  async remove(id: string): Promise<void> {
    await this.prisma.comments.delete({ where: { id } });
  }
}
