import { Injectable } from '@nestjs/common';
import {User} from "../entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository} from "typeorm";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {

    }

    async findAllUsers(): Promise<User[]> {

        return this.userRepository.find();
    }

    async findbyIdUser(id:number):Promise<User>{
        return this.userRepository.findOneBy({id});
    }

    async findbyEmailUser(email:string):Promise<User>{
        return this.userRepository.findOneBy({email});
    }

    async createUser(createUserDto:CreateUserDto):Promise<User>{
        const hashed = await bcrypt.hash(createUserDto.password, 10);

        const data = {...createUserDto, password:hashed}

        const newUser = this.userRepository.create(data);
        return this.userRepository.save(newUser);
    }

    async updateUser(id:number, updateUserDto: UpdateUserDto): Promise<User>{
        await this.userRepository.update(id,updateUserDto)
        return this.findbyIdUser(id);
    }

    async deleteUser(id:number): Promise<DeleteResult>{
        return this.userRepository.delete(id);
    }


}
