import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseOptionsFactory, } from "@nestjs/mongoose";

@Injectable()

export class MongooseService implements MongooseOptionsFactory{
  constructor(private config: ConfigService) {}

  createMongooseOptions() {
    const DB_USER = this.config.get("DB_USER");
    const DB_PASSWORD = this.config.get("DB_PASSWORD");
    const DB_HOST = this.config.get("DB_HOST");
    const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`;

    return { uri, useNewUrlParser: true, useUnifiedTopology: true};
  }
}