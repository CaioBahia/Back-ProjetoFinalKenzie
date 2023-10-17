import { Injectable } from '@nestjs/common';
import { CommentsRepository } from '../comments.repository';
import { PrismaService } from 'src/modules/database/prisma.service';
import { CreateCommentDto } from '../../dto/create-comment.dto';
import { Comment } from '../../entities/comment.entity';
import { UpdateCommentDto } from '../../dto/update-comment.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CommentPrismaRepository implements CommentsRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    data: CreateCommentDto,
    user_id: string,
    anouncement_id: string,
  ): Promise<Comment> {
    const comment = new Comment();
    Object.assign(comment, { ...data });
    const newComment = await this.prisma.comments.create({
      data: {
        id: comment.id,
        text: comment.text,
        user_id,
        anouncement_id,
      },
    });
    return newComment;
  }

  async findByAd(anouncement_id: string): Promise<Comment[]> {
    const comments = await this.prisma.comments.findMany({
      where: { anouncement_id },
    });
    return comments;
  }
  async findByUser(user_id: string): Promise<Comment[]> {
    const comments = await this.prisma.comments.findMany({
      where: { user_id },
    });
    return comments;
  }
  async update(data: UpdateCommentDto, id: string): Promise<Comment> {
    const comment = await this.prisma.comments.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(Comment, comment);
  }
  async remove(id: string): Promise<void> {
    await this.prisma.comments.delete({ where: { id } });
  }
}
