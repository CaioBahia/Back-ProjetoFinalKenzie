import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseGuards,
  Request,
  ForbiddenException,
} from '@nestjs/common';
import { AnouncementsService } from './anouncements.service';
import { CreateAnouncementDto } from './dto/create-anouncement.dto';
import { UpdateAnouncementDto } from './dto/update-anouncement.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { get } from 'http';

@ApiTags('Anouncements')
@Controller('anouncement')
export class AnouncementsController {
  constructor(private readonly anouncementsService: AnouncementsService) {}

  @Post('')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(@Body() createAnouncementDto: CreateAnouncementDto, @Request() req) {
    if (req.user.type === 'comprador') {
      throw new ForbiddenException('Invalid Account Type!');
    }
    return this.anouncementsService.create(createAnouncementDto, req.user.id);
  }

  @Get()
  findAll() {
    return this.anouncementsService.findAll();
  }

  @Get(':id')
  findbyid(@Param('id') id: string) {
    return this.anouncementsService.findById(id);
  }

  @Get(':id')
  findAdByUser(@Param('id') userId: string) {
    return this.anouncementsService.findByUserId(userId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnouncementDto: UpdateAnouncementDto,
  ) {
    return this.anouncementsService.update(updateAnouncementDto, id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anouncementsService.remove(id);
  }
}
