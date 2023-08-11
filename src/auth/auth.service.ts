import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { USER_MODEL, UserDocument } from 'src/schemas/user/user.schems';
import { LoginInputType } from './dtos/login-input.type';
import { JwtService } from '@nestjs/jwt';
import { UserType } from 'src/users/users.type';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(USER_MODEL) private readonly userModel: Model<UserDocument>,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ email: email, password: password });

    if(!user) {
      return null;
    }

    return user;
  }

  async login(loginUserInput: UserType) {
    const { email } = loginUserInput;
    //const user = await this.userModel.findOne({ email: email});
    return {
      accessToken : this.jwtService.sign({ email: email, sub: loginUserInput._id }),
      user: loginUserInput
    }
  }

}
