import { ACCOUNT_STATUS, ACCOUNT_TYPE  } from "src/constants/db.constant";
import { Field, InputType } from "@nestjs/graphql";
import { ArrayMinSize, IsEmail, IsIn, IsNumber, IsObject, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Address } from "./address.dto";

@InputType()
export class CreateUserDto {
  @IsString()
  @MinLength(1)
  @Field()
  name: string;

  @IsEmail()
  @Field()
  email: string;

  @Field()
  password: string;

  @IsNumber()
  @IsOptional()
  @Field({ nullable: true })
  age: string;

  @IsIn(Object.keys(ACCOUNT_STATUS))
  @Field({ nullable: true })
  @IsOptional()
  status: ACCOUNT_STATUS;

  @IsIn(Object.keys(ACCOUNT_TYPE))
  @IsOptional()
  @Field({ nullable: true })
  accountType: ACCOUNT_TYPE;

  @IsString({ each: true })
  @ArrayMinSize(1)
  @IsOptional()
  @Field(type => [String], { nullable: true })
  social: string[]

  @Field({ nullable: true })
  @IsOptional()
  isEmailVerified?: boolean

  @Field(type => String, { nullable: true })
  @IsOptional()
  metadata: any;


  @Type(() => Address)
  @ValidateNested()
  @IsObject()
  @Field(() => Address, { nullable: true })
  @IsOptional()
  address: Address
}

