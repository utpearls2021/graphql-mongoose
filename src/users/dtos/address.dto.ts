import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class Address {
  @Field()
  address1: string;

  @Field({ nullable: true })
  address2: string;

  @Field({ nullable: true })
  city: string;

  @Field()
  country: string;

  @Field({ nullable: true })
  state: string;

  @Field({ nullable: true })
  zipcode: string;
}
