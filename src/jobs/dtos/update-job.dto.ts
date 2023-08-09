import { PartialType, OmitType } from "@nestjs/mapped-types";
import { CreateJobDto } from "./create-job.dto";

export class UpdateJobDto extends PartialType(CreateJobDto){} // for optional in CreateJobDto update
//export class UpdateJobDto extends PartialType(OmitType(CreateJobDto, ['userId'])){} // for ommit type UpdateJobDto