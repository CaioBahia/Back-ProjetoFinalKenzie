import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AnouncementsModule } from './modules/anouncements/anouncements.module';
import { AuthModule } from './modules/auth/auth.module';
import { AddressModule } from './modules/address/address.module';

@Module({
  imports: [UsersModule, AnouncementsModule, AuthModule, AddressModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
