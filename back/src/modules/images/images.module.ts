import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { AnouncementsModule } from '../anouncements/anouncements.module';
import { PrismaService } from '../database/prisma.service';
import { ImagesRepository } from './repositories/images.repository';
import { ImagesPrismaRepository } from './repositories/prisma/images-prisma.repositoy';

@Module({
  imports: [AnouncementsModule],
  controllers: [ImagesController],
  providers: [
    ImagesService,
    PrismaService,
    {
      provide: ImagesRepository,
      useClass: ImagesPrismaRepository,
    },
  ],
  exports: [ImagesService],
})
export class ImagesModule {}
