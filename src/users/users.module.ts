import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserReslover } from './user.reslover';
@Module({
  imports: [],
  providers: [UsersService, UserReslover],
  exports: [],
  controllers: [UsersController]
})
export class UsersModule {}
