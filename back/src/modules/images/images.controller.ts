import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post(':anouncement_id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() data: CreateImageDto,
    @Param('anouncement_id') anouncement_id: string,
  ) {
    return this.imagesService.create(data, anouncement_id);
  }

  @Get('anouncement/:anouncement_id')
  findOne(@Param('anouncement_id') anouncement_id: string) {
    return this.imagesService.findByAd(anouncement_id);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.imagesService.remove(id);
  }
}
