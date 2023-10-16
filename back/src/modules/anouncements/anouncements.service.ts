import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnouncementDto } from './dto/create-anouncement.dto';
import { UpdateAnouncementDto } from './dto/update-anouncement.dto';
import { AnouncementsRepository } from './repositories/anouncements.repository';

@Injectable()
export class AnouncementsService {
  constructor(private anouncementRepository: AnouncementsRepository) {}

  async create(createAnouncementDto: CreateAnouncementDto, user_id: string) {
    const ad = await this.anouncementRepository.create(
      createAnouncementDto,
      user_id,
    );
    return ad;
  }

  async findAll() {
    return this.anouncementRepository.findAll();
  }

  async findById(id: string) {
    const FindAd = await this.anouncementRepository.findById(id);
    if (!FindAd) {
      throw new NotFoundException('Anouncement Not Found!');
    }
    return FindAd;
  }

  async findByUserId(user_id: string) {
    const findAds = await this.anouncementRepository.findByUserId(user_id);
    return findAds;
  }

  async update(data: UpdateAnouncementDto, id: string) {
    const ad = await this.anouncementRepository.update(data, id);
    if (!ad) {
      throw new NotFoundException('Anouncement not found!');
    }
    return ad;
  }

  async remove(id: string) {
    await this.anouncementRepository.remove(id);
  }
}
