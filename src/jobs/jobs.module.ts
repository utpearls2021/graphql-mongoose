import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobReslover } from './job.reslover';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [],
  providers: [JobReslover, JobsService, UsersService],
  exports: []
})
export class JobsModule {}
