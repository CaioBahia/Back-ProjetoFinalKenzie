import { CreateAnouncementDto } from '../dto/create-anouncement.dto';
import { UpdateAnouncementDto } from '../dto/update-anouncement.dto';
import { Anouncement } from '../entities/anouncement.entity';

export abstract class AnouncementsRepository {
  abstract create(
    data: CreateAnouncementDto,
    userId: string,
  ): Promise<Anouncement>;

  abstract findAll(): Promise<Anouncement[]>;
  abstract findById(id: string): Promise<Anouncement | undefined>;
  abstract findByUser(userId: string): Promise<Anouncement | undefined>;
  abstract update(data: UpdateAnouncementDto, id: string);
  abstract remove(id: string): Promise<void>;
}
