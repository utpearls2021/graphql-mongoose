import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class FileType {
  @Field()
  image: string;
}