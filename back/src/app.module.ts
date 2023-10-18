import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AnouncementsModule } from './modules/anouncements/anouncements.module';
import { AuthModule } from './modules/auth/auth.module';
import { AddressModule } from './modules/address/address.module';
import { CommentsModule } from './modules/comments/comments.module';
import { ImagesModule } from './modules/images/images.module';

@Module({
  imports: [
    UsersModule,
    AnouncementsModule,
    AuthModule,
    AddressModule,
    CommentsModule,
    ImagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
