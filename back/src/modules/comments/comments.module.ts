import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { UsersModule } from '../users/users.module';
import { PrismaService } from '../database/prisma.service';
import { CommentsRepository } from './repositories/comments.repository';
import { CommentPrismaRepository } from './repositories/prisma/comments-prisma.repository';
import { AnouncementsService } from '../anouncements/anouncements.service';

@Module({
  imports: [UsersModule],
  controllers: [CommentsController],
  providers: [
    CommentsService,
    PrismaService,
    {
      provide: CommentsRepository,
      useClass: CommentPrismaRepository,
    },
  ],
  exports: [CommentsService],
})
export class CommentsModule {}
