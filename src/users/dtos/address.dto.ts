import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

@InputType()
export class Address {
  @IsString()
  @IsNotEmpty({ message: "address1 field is required" })
  @Field()
  address1: string;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  address2: string;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  city: string;

  @IsString()
  @IsOptional()
  @Field()
  country: string;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  state: string;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  zipcode: string;
}
