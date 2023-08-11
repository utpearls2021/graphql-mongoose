import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthReslover } from './auth.reslover';
import { LocalStratagy } from './local.stratagy';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStratagy } from './jwt-stratagy';

@Module({
  imports: [PassportModule, UsersModule, JwtModule.register({
    signOptions: { expiresIn: "500s"},
    secret: "login-token"
  })],
  providers: [AuthService, AuthReslover, LocalStratagy, JwtStratagy]
})
export class AuthModule {}
