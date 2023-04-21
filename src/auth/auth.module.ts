import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UserModule} from "../user/user.module";
import {UserService} from "../user/user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../entities/user.entity";
import {LocalStrategy} from "./strategies/local.strategy";
import {JwtModule} from "@nestjs/jwt";
import * as process from "process";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports:[
      UserModule,
      TypeOrmModule.forFeature([User]),
      ConfigModule.forRoot(),
      JwtModule.register({
        secret: process.env.JWT_SECRET,
        signOptions: {expiresIn: '60s'},
      }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy]
})
export class AuthModule {}
