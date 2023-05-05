import {Body, Controller, Post, UseGuards, Request, Get, Res} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {LoginDto} from "./dto/login.dto";
import {AuthGuard} from "@nestjs/passport";
import {Response} from "express";
import {LocalAuthGuard} from "./guards/localAuth.guard";
import {JwtAuthGuard} from "./guards/jwtAuth.guard";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }
    @UseGuards(LocalAuthGuard)
    @Post('login')
    signIn(@Request() req, @Res() res: Response){
        const jwt = req.user;
        res.setHeader('Set-Cookie',[jwt]).json();
        //const token = 'access_token'

    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    profile(@Request() req){
        return req.user;
    }

    @UseGuards(JwtAuthGuard)
    @Post('logout')
    logout(@Request() req){
        req.res.setHeader("Set-Cookie", `Access_token=; HttpOnly; Path=/; Max-Age=0`);
    }
}
