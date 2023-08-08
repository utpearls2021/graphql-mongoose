import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [],
  providers: [UsersService],
  exports: [],
  controllers: [UsersController]
})
export class UsersModule {}
