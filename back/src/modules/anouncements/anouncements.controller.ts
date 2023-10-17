import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  ForbiddenException,
} from '@nestjs/common';
import { AnouncementsService } from './anouncements.service';
import { CreateAnouncementDto } from './dto/create-anouncement.dto';
import { UpdateAnouncementDto } from './dto/update-anouncement.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UsersService } from '../users/users.service';

@ApiTags('Anouncements')
@Controller('anouncement')
export class AnouncementsController {
  constructor(
    private readonly anouncementsService: AnouncementsService,
    private userService: UsersService,
  ) {}

  @Post('')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createAnouncementDto: CreateAnouncementDto,
    @Request() req,
  ) {
    const findUserType = await this.userService.findById(req.user.id);

    if (findUserType.type === 'comprador') {
      throw new ForbiddenException('Invalid Account Type!');
    }
    return this.anouncementsService.create(createAnouncementDto, req.user.id);
  }

  @Get()
  findAll() {
    return this.anouncementsService.findAll();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findbyid(@Param('id') id: string) {
    return this.anouncementsService.findById(id);
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('user/:id')
  findAdByUser(@Param('id') userId: string) {
    return this.anouncementsService.findByUserId(userId);
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnouncementDto: UpdateAnouncementDto,
  ) {
    return this.anouncementsService.update(updateAnouncementDto, id);
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anouncementsService.remove(id);
  }
}
