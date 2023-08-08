import { Args, Resolver, Query, ResolveField, Mutation } from "@nestjs/graphql";
import { UserType } from "./users.type";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update.user.dto";

@Resolver(of => UserType)
export class UserReslover {
  constructor(private userService: UsersService) {}

  @Query(returns => UserType)
  user(@Args("id") id: string) {
    return this.userService.getById(id);
  }

  @Query(returns => [UserType])
  users () {
    return this.userService.getAll();
  }

  @Mutation(returns => UserType)
  createUser(@Args("user") createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }

  @Mutation(returns => UserType)
  async updateUser(@Args("user") updateUserDto: UpdateUserDto) {
    const { id, update } = updateUserDto;
    return await this.userService.update(id, update);
  }
}
