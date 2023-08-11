import { Field, ObjectType } from "@nestjs/graphql";
import { UserType } from "src/users/users.type";

@ObjectType("auth")
export class AuthType {
  @Field()
  accessToken: string;

  @Field(type => UserType)
  user: UserType
}