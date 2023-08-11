import { CreateJobDto } from "./create-job.dto";
import { InputType, Field, ID, PartialType, OmitType} from "@nestjs/graphql";
import { CheckBrowserMiddleware } from "../../middlewares/check-browser.middleware";

@InputType("updateJob")
export class UpdateJob extends PartialType(CreateJobDto){} // for optional in CreateJobDto update
//export class UpdateJobDto extends PartialType(OmitType(CreateJobDto, ['userId'])){} // for ommit type UpdateJobDto

@InputType()
export class UpdateJobDto {
  @Field(type => ID)
  id: string;

  @Field(() => UpdateJob, { middleware: [CheckBrowserMiddleware]})
  update: UpdateJob
}