import { Schema, Prop, raw, SchemaFactory } from "@nestjs/mongoose";
import { ACCOUNT_TYPE, ACCOUNT_STATUS } from "../../constants/db.constant";
import { AddressSchema, Address } from "../common/address.schema";
import { Document } from "mongoose";

@Schema({
  timestamps: true,
  //collection:"users"
})
export class User {
  @Prop({ required: true })
  name: string;

  @Prop()
  email: string;

  @Prop({ select: false})
  password: string;

  @Prop()
  age: string;

  @Prop({
    type: String,
    enum:Object.keys(ACCOUNT_STATUS),
    default: ACCOUNT_STATUS.ACTIVE,
  })
  status: ACCOUNT_STATUS;

  @Prop({
    type: String,
    enum: Object.keys(ACCOUNT_TYPE),
    default: ACCOUNT_TYPE.STUDENT,
    immutable: true,
  })
  accountType: ACCOUNT_STATUS;

  @Prop({ default: [] })
  social: string[]

  @Prop({ default: false })
  isEmailVerified: boolean

  @Prop({ type: AddressSchema})
  address: Address

  @Prop(raw({}))
  metadata: any;
}

export const UserSchema = SchemaFactory.createForClass(User);

export const USER_MODEL = User.name; // User

export type UserDocument = User & Document;