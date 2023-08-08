import { ACCOUNT_STATUS, ACCOUNT_TYPE  } from "src/constants/db.constant";
import { Field, ID, InputType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { Address } from "./address.dto";

@InputType()
export class UpdateUser {
  @Field({ nullable: true })
  @IsOptional()
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  email: string;

  @Field({ nullable: true })
  @IsOptional()
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


@InputType()
export class UpdateUserDto {
  @Field(type => ID)
  id: string;

  @Field(() => UpdateUser)
  update: UpdateUser
}
