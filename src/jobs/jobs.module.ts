import { MiddlewareConsumer, Module, NestModule, OnModuleInit } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobReslover } from './job.reslover';
import { UsersService } from 'src/users/users.service';
import { userAgent } from '../middlewares/user-agent.middleware';

@Module({
  imports: [],
  providers: [JobReslover, JobsService, UsersService],
  exports: []
})
export class JobsModule implements OnModuleInit, NestModule {
  onModuleInit(){
    console.log(this);
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(userAgent).forRoutes("graphql")
  }
}
