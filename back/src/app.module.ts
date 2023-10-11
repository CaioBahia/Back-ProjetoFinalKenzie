import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AnouncementsModule } from './modules/anouncements/anouncements.module';

@Module({
  imports: [UsersModule, AnouncementsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
