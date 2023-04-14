import {Controller, Get, Post} from '@nestjs/common';
import {MustBeEntityError} from "typeorm";
import {UserService} from "./user.service";

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {
    }

    @Get()
    findAllUsers(){
        return this.userService.findAllUsers();
    }
}
