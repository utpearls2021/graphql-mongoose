import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { JOB_TYPES, JOB_STATUS } from "../../constants/db.constant";
import { Types, Document } from "mongoose";
import { User, USER_MODEL } from "../user/user.schems";

@Schema({
  timestamps: true,
})
export class Job {
  @Prop({ type: Types.ObjectId, ref: USER_MODEL, required: true})
  employer: Types.ObjectId | User

  @Prop({ required: true })
  title: string

  @Prop({ required: true })
  companyName: string

  @Prop({ required: true })
  description: string

  @Prop()
  experience: string

  @Prop({ default: []})
  tags: string[]

  @Prop()
  salary: string

  @Prop({
    type: String,
    enum: Object.keys(JOB_STATUS),
    default: JOB_STATUS.PENDING
  })
  status: JOB_STATUS

  @Prop({
    type: String,
    enum: Object.keys(JOB_TYPES),
    default: JOB_TYPES.FULLTIME
  })
  jobType: JOB_TYPES
}

export const JobSchema = SchemaFactory.createForClass(Job);
export const JOB_MODEL = Job.name;
export type JobDocument = Job & Document;