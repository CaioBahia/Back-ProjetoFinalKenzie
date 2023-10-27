import { Injectable } from '@nestjs/common';
import { AnouncementsRepository } from '../anouncements.repository';
import { PrismaService } from 'src/modules/database/prisma.service';
import { Anouncement } from '../../entities/anouncement.entity';
import { CreateAnouncementDto } from '../../dto/create-anouncement.dto';
import { UpdateAnouncementDto } from '../../dto/update-anouncement.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class AnouncementPrismaRepository implements AnouncementsRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    data: CreateAnouncementDto,
    user_id: string,
  ): Promise<Anouncement> {
    const ads = new Anouncement();

    Object.assign(ads, { ...data });
    const newAds = await this.prisma.anouncement.create({
      data: {
        id: ads.id,
        brand: ads.brand,
        model: ads.model,
        year: ads.year,
        fuel: ads.fuel,
        km: ads.km,
        color: ads.color,
        fipe: ads.fipe,
        price: ads.price,
        description: ads.description,
        adStatus: ads.adStatus,
        cover_img_url: ads.cover_img_url,
        user_id,
      },
    });
    console.log('OIOIOIOIOI');
    return newAds;
  }

  async findAll(): Promise<Anouncement[]> {
    const ads = await this.prisma.anouncement.findMany();
    return plainToInstance(Anouncement, ads);
  }
  async findById(id: string): Promise<Anouncement> {
    const ad = await this.prisma.anouncement.findUnique({
      where: { id },
    });
    return ad;
  }
  async findByUserId(user_id: string): Promise<Anouncement[]> {
    const ads = await this.prisma.anouncement.findMany({
      where: { user_id },
    });
    return ads;
  }
  async update(data: UpdateAnouncementDto, id: string) {
    const ad = await this.prisma.anouncement.update({
      where: { id },
      data: { ...data },
    });
    return plainToInstance(Anouncement, ad);
  }
  async remove(id: string): Promise<void> {
    await this.prisma.anouncement.delete({
      where: { id },
    });
  }
}
