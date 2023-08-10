import { Args, Mutation, Parent, ResolveField, Resolver,Query } from "@nestjs/graphql";
import { JobType } from "./job.type";
import { CreateJobDto } from "./dtos/create-job.dto";
import { JobsService } from "./jobs.service";
import { UserType } from "src/users/users.type";
import { UsersService } from "src/users/users.service";
import { ResponseJobDto } from "./dtos/response-job.dto";
import { convertStringIdToObjectId } from "../helpers/generic.function";
import { UpdateJobDto } from "./dtos/update-job.dto";
import { CompanyException } from "src/exceptions/company.exception";
import { BadRequestException, UseFilters } from "@nestjs/common";
import { CustomExceptionFilter } from "../exceptions/exception.filter";
import { HttpExceptionFilter } from "../exceptions/http-exception.filter";

@Resolver(of => JobType)
export class JobReslover {
  constructor(private jobService: JobsService, private userService: UsersService) {}

  @Query(returns => [ResponseJobDto])
  async jobs() {
    return await this.jobService.getJobWithUser();
  }

  @Query(returns => JobType)
  async job(@Args("id") id: string): Promise<JobType>{
    return this.jobService.getById(id)
  }

  @UseFilters(HttpExceptionFilter)
  @Mutation(returns => JobType)
  async create(@Args("job") job: CreateJobDto) {

    if (job.companyName.length < 2) {
      throw new BadRequestException("company name must be more then 2 characters");
    }
    return await this.jobService.create(job);
  }

  @Mutation(returns => JobType, { name: "updateJob"})
  async updateJob(@Args("job") job: UpdateJobDto){
    const { id, update } = job;
    return this.jobService.update(id, JSON.parse(JSON.stringify(update)));
  }

}
