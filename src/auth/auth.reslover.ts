import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { AuthType } from "./auth.type";
import { AuthService } from "./auth.service";
import { LoginInputType } from "./dtos/login-input.type";
import { GqlAuthGuard } from "./gql-auth.guard";
import { UseGuards } from "@nestjs/common";

@Resolver(of => AuthType)
export class AuthReslover {

  constructor(private authService: AuthService) {}

  @Mutation(returns => AuthType)
  @UseGuards(GqlAuthGuard)
  auth(@Args("loginInput") loginInput: LoginInputType, @Context() context) {
    return this.authService.login(context.user)
  }
}