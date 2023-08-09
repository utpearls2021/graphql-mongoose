import { Field, ID, InputType, ObjectType } from "@nestjs/graphql";
import { JOB_TYPES } from "src/constants/db.constant";
import { UserType } from "src/users/users.type";

@ObjectType()
export class ResponseJobDto {
  @Field(type => ID, { nullable: true})
  user_id: string

  @Field(type => UserType, { nullable: true})
  employer: UserType

  @Field({ nullable: true})
  title: string

  @Field({ nullable: true})
  companyName: string

  @Field({ nullable: true})
  description: string

  @Field({ nullable: true})
  experience: string

  @Field(type => [String],{ nullable: true })
  tags: string[]

  @Field({ nullable: true})
  salary: string

  @Field(type => String, { nullable: true})
  jobType: JOB_TYPES
}
