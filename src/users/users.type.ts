import { ObjectType, Field, ID } from "@nestjs/graphql";
import { ACCOUNT_STATUS, ACCOUNT_TYPE  } from "../constants/db.constant";

@ObjectType("address")
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

@ObjectType("User")
export class UserType {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  age: string;

  @Field()
  status: ACCOUNT_STATUS;

  @Field()
  accountType: ACCOUNT_TYPE;

  @Field(type => [String])
  social: string[]

  @Field()
  isEmailVerified: boolean

  @Field(type => ID)
  _id: string

  @Field(() => Address)
  address: Address

}