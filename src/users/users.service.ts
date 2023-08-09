import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { USER_MODEL, UserDocument } from 'src/schemas/user/user.schems';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUser } from "./dtos/update.user.dto"
import { makeStringLowerCase } from "../helpers/generic.function";
import { UserType } from './users.type';
@Injectable()
export class UsersService {
  constructor(@InjectModel(USER_MODEL) private readonly userModel: Model<UserDocument>) {}

  create(createUser: CreateUserDto): Promise<UserType> {
    return this.userModel.create(createUser);
  }

  async getAll() {
    return await this.userModel.find();
  }

  async getById(id: string): Promise<UserType> {
    return await this.userModel.findOne({ _id: id });
  }

  async update(id: string, data: UpdateUser): Promise<UserType> {
    data.name = makeStringLowerCase(data.name);
    return await this.userModel.findOneAndUpdate( { _id: id }, data, { new: true });
  }
}
