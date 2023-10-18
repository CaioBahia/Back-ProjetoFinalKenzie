import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Comments')
@Controller('comment')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post('anouncement/:anouncement_id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() data: CreateCommentDto,
    @Request() req,
    @Param('anouncement_id') anouncement_id: string,
  ) {
    return this.commentsService.create(data, req.user.id, anouncement_id);
  }

  @Get('user/:user_id')
  findByUser(@Param('user_id') user_id: string) {
    return this.commentsService.findByUser(user_id);
  }

  @Get('anouncement/:anouncement_id')
  findOne(@Param('anouncement_id') anouncement_id: string) {
    return this.commentsService.findByAd(anouncement_id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(id);
  }
}
