import { Field, ID, ObjectType } from "@nestjs/graphql";
import { UserType } from "src/users/users.type";
import { JOB_STATUS, JOB_TYPES } from "src/constants/db.constant";

@ObjectType("Job")
export class JobType {
  @Field(type => ID)
  user_id: string

  @Field(type => UserType, {nullable: true})
  employer: UserType

  @Field()
  title: string

  @Field()
  companyName: string

  @Field()
  description: string

  @Field()
  experience: string

  @Field(type => [String])
  tags: string[]

  @Field()
  salary: string

  @Field(type => String)
  status: JOB_STATUS

  @Field(type => String)
  jobType: JOB_TYPES
}
