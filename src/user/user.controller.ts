import {Body, Controller, Delete, Get, Param, Patch, Post, Put} from '@nestjs/common';
import {DeleteResult, MustBeEntityError} from "typeorm";
import {UserService} from "./user.service";
import {User} from "../entities/user.entity";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";

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

    @Get(':id')
    async findByIdUser(@Param('id') id:number):Promise<User>{
        return this.userService.findbyIdUser(id);
    }

    @Get(':email')
    async findByEmailUser(@Param('email') email:string):Promise<User>{
        return this.userService.findbyEmailUser(email);
    }

    @Post()
    async createUser(@Body() createUserDto:CreateUserDto): Promise<User>{
        return this.userService.createUser(createUserDto)
    }

    @Patch(':id')
    async updateUser(@Param('id')id:number, @Body() updateUserDto:UpdateUserDto):Promise<User>{
        return this.userService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id:number):Promise<DeleteResult>{
        return this.userService.deleteUser(id);
    }
}
