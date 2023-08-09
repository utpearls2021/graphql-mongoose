import { Stream } from 'stream';
import * as GraphQLUpload from "graphql-upload/GraphQLUpload.js";
import { Field, InputType } from '@nestjs/graphql';

export interface FileUploadInterface {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}


@InputType()
export class FileUpload {
  @Field(() => GraphQLUpload)
  image: Promise<FileUploadInterface>;
}