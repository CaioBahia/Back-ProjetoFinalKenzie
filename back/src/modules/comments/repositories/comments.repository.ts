import { CreateCommentDto } from '../dto/create-comment.dto';
import { UpdateCommentDto } from '../dto/update-comment.dto';
import { Comment } from '../entities/comment.entity';

export abstract class CommentsRepository {
  abstract create(
    data: CreateCommentDto,
    user_id: string,
    anouncement_id: string,
  ): Promise<Comment>;
  abstract findByAd(anouncement_id: string): Promise<Comment[]>;
  abstract findByUser(user_id: string): Promise<Comment[]>;
  abstract update(data: UpdateCommentDto, id: string): Promise<Comment>;
  abstract remove(id: string): Promise<void>;
}
