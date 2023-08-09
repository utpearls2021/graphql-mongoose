import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.js"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use("/graphql", graphqlUploadExpress({ maxFileSize: 1000000, maxFile: 5 }));
  await app.listen(3000);
}
bootstrap();
