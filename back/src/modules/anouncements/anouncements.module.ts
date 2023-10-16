import { Module } from '@nestjs/common';
import { AnouncementsService } from './anouncements.service';
import { AnouncementsController } from './anouncements.controller';
import { PrismaService } from '../database/prisma.service';
import { AnouncementsRepository } from './repositories/anouncements.repository';
import { AnouncementPrismaRepository } from './repositories/prisma/anoucements-prisma.repository';

@Module({
  controllers: [AnouncementsController],
  providers: [
    AnouncementsService,
    PrismaService,
    {
      provide: AnouncementsRepository,
      useClass: AnouncementPrismaRepository,
    },
  ],
})
export class AnouncementsModule {}
