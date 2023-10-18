import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentsRepository } from './repositories/comments.repository';

@Injectable()
export class CommentsService {
  constructor(private commentsRepository: CommentsRepository) {}

  async create(
    data: CreateCommentDto,
    user_id: string,
    anouncement_id: string,
  ) {
    const comment = await this.commentsRepository.create(
      data,
      user_id,
      anouncement_id,
    );
    return comment;
  }

  async findByAd(anouncement_id: string) {
    const comments = await this.commentsRepository.findByAd(anouncement_id);
    return comments;
  }

  async findByUser(user_id: string) {
    const comments = await this.commentsRepository.findByUser(user_id);
    return comments;
  }

  // async update(data: UpdateCommentDto, id: string) {
  //   const comment = await this.commentsRepository.update(data, id);
  //   if (!comment) {
  //     throw new NotFoundException('Comment not found!');
  //   }
  //   return comment;
  // }

  async remove(id: string) {
    await this.commentsRepository.remove(id);
  }
}
