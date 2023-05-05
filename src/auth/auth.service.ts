import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import * as bcrypt from 'bcrypt';
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private userService : UserService,
                private jwtService:JwtService) {
    }

    async signIn(email:string, password:string){
        const user = await this.userService.findbyEmailUser(email);
        if (!user){
            throw new NotFoundException("User with this email is not found.")
        }

        if(!(await bcrypt.compare(password,user.password))){
            throw new BadRequestException('Password mismatch.')
        }

        const payload={
            "email":user.email,
            "sub":user.id
        };

        const accessToken = this.jwtService.sign(payload);
        const tokenString:string = `Access_token=${accessToken}; HttpOnly; Path=/; Max-Age=1d`;

        return tokenString;
    }
}
