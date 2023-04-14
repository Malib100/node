import { Injectable } from '@nestjs/common';
import {User} from "../entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {

    }

    async findAllUsers(): Promise<User[]> {

        return this.userRepository.find();
    }

    async createUser(createUserDto:CreateUserDto):Promise<User>{
        const newUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUser);
    }
}
