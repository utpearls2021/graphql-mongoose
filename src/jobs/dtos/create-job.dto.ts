import { Field, ID, InputType } from "@nestjs/graphql";
import { Types } from "mongoose";
import { UserType } from "src/users/users.type";
import { JOB_TYPES, JOB_STATUS } from "src/constants/db.constant";
import { CheckBrowserMiddleware } from "../../middlewares/check-browser.middleware";
@InputType()
export class CreateJobDto {
  @Field(type => ID)
  userId: string

  @Field()
  title: string

  @Field({ middleware: [CheckBrowserMiddleware]})
  companyName: string

  @Field()
  description: string

  @Field()
  experience: string

  @Field(type => [String],{ nullable: true })
  tags: string[]

  @Field()
  salary: string

  @Field(type => String)
  jobType: JOB_TYPES

}
