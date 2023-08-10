import { Module, OnApplicationShutdown, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from './db/database.module';
import { UsersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
import { MongooseModelModule } from './schemas/mongoose-model.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { CheckBrowserMiddleware } from './middlewares/check-browser.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        fieldMiddleware: [CheckBrowserMiddleware],
      },
    }),
    DatabaseModule,
    MongooseModelModule,
    UsersModule,
    JobsModule
  ],
})
export class AppModule implements OnModuleInit, OnApplicationShutdown {
  onModuleInit(){
    console.log("app module init");
  }

  onApplicationShutdown(signal? : any) {
    console.log("app module shutdown",signal);
  }
}

