import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class LoginInputType {
  @Field()
  email: string;

  @Field()
  password: string;
}