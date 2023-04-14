import {Body, Controller, Get, Post} from '@nestjs/common';
import {MustBeEntityError} from "typeorm";
import {UserService} from "./user.service";
import {User} from "../entities/user.entity";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {
    }

    @Get()
    async findAllUsers() : Promise<User[]>{
        return this.userService.findAllUsers();
    }

    @Post()
    async createUser(@Body() createUserDto:CreateUserDto): Promise<User>{
        return
    }
}
