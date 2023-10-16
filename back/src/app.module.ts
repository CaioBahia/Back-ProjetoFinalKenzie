import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AnouncementsModule } from './modules/anouncements/anouncements.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UsersModule, AnouncementsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
