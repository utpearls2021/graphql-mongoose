import { ACCOUNT_STATUS, ACCOUNT_TYPE  } from "src/constants/db.constant";
import { Field, InputType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { Address } from "./address.dto";

@InputType()
export class CreateUserDto {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  @IsOptional()
  age: string;

  @Field({ nullable: true })
  @IsOptional()
  status: ACCOUNT_STATUS;

  @Field({ nullable: true })
  @IsOptional()
  accountType: ACCOUNT_TYPE;

  @IsOptional()
  @Field(type => [String], { nullable: true })
  social: string[]

  @Field({ nullable: true })
  @IsOptional()
  isEmailVerified?: boolean

  @Field(type => String, { nullable: true })
  @IsOptional()
  metadata: any;

  @Field(() => Address, { nullable: true })
  @IsOptional()
  address: Address
}

