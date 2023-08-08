import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MongooseService } from "./mongoose-service.config";
import { ConfigService } from "@nestjs/config";

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseService,
      inject: [ConfigService]
    }),
  ],

  exports: [MongooseModule]
})
export class DatabaseModule {}