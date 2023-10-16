import { Injectable } from '@nestjs/common';
import { AnouncementsRepository } from '../anouncements.repository';
import { PrismaService } from 'src/modules/database/prisma.service';
import { Anouncement } from '../../entities/anouncement.entity';
import { CreateAnouncementDto } from '../../dto/create-anouncement.dto';
import { UpdateAnouncementDto } from '../../dto/update-anouncement.dto';

@Injectable()
export class AnouncementPrismaRepository implements AnouncementsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAnouncementDto): Promise<Anouncement> {
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
        user_id: ads.user_id,
      },
    });
    return newAds;
  }

  findAll(): Promise<Anouncement[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<Anouncement> {
    throw new Error('Method not implemented.');
  }
  findByUser(userId: string): Promise<Anouncement> {
    throw new Error('Method not implemented.');
  }
  update(data: UpdateAnouncementDto, id: string) {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
