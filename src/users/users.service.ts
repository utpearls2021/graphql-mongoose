import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { USER_MODEL, UserDocument } from 'src/schemas/user/user.schems';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(USER_MODEL) private readonly userModel: Model<UserDocument>) {}

  create(createUser: CreateUserDto) {
    return this.userModel.create(createUser);
  }

  getAll() {
    return this.userModel.find();
  }
}
