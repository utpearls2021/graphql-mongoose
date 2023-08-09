import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel,  } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JOB_MODEL, JobDocument } from 'src/schemas/job/job.schema';
import { CreateJobDto } from './dtos/create-job.dto';
import { JobType } from './job.type';
import { convertStringIdToObjectId } from "../helpers/generic.function";
import { USER_MODEL } from 'src/schemas/user/user.schems';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class JobsService {
  constructor(@InjectModel(JOB_MODEL) private readonly jobModel: Model<JobDocument>, private usersService: UsersService) {}

  async create(job: CreateJobDto) {
    const { userId } = job;
    const user = await this.usersService.getById(userId);

    if (!user) {
      throw new NotFoundException("user not found");
    }

   return await this.jobModel.create({ ...job, employer: user._id });
  }

  async getById(id: string): Promise<JobType> {
    return await this.jobModel.findOne({_id: id });
  }

  async getAll(){
    return await this.jobModel.find();
  }

  async getJobWithUser() {
    return await this.jobModel.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "employer",
          foreignField: "_id",
          as: "employer"
        }
      },
      {
        $unwind: {
          path: "$employer",
          preserveNullAndEmptyArrays: true
        }
      }
    ]);
  }
}
