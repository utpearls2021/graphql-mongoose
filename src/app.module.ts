import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from './db/database.module';
import { UsersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
import { MongooseModelModule } from './schemas/mongoose-model.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    DatabaseModule,
    MongooseModelModule,
    UsersModule,
    JobsModule
  ],
})
export class AppModule {}
