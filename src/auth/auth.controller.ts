import { Body, Controller, Post, Res, Req, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { Token } from './tokens/tokens.model';
import { Request, Response } from 'express';
import { Public } from './guards/decorators/public.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    
    @ApiOperation({summary: 'Log in system'})
    @ApiResponse({ status: 200, type: Token})
    @ApiResponse({status: 401, description: 'Неверный пароль или логин'})
    @Public()
    @Post('/login')
    async login(@Body() dto : CreateUserDto, @Res({ passthrough: true }) response: Response){
        let tokens = await this.authService.login(dto);
        response.cookie('refreshToken', tokens.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true});
        return tokens;
    }

    @ApiOperation({summary: 'Registration user in system'})
    @ApiResponse({ status: 200, type: Token})
    @ApiResponse({status: 400, description: 'Такой аккаунт уже существует'})
    @Public()
    @Post('/register')
    async register(@Body() dto: CreateUserDto, @Res({ passthrough: true }) response: Response){
        let tokens = await this.authService.register(dto);
        response.cookie('refreshToken', tokens.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true});
        return tokens;
    }

    @ApiOperation({summary: 'Log out user in system'})
    @ApiResponse({ status: 200, type: Token})
    @Get('/logout')
    @Public()
    async logout(@Req() request: Request, @Res({ passthrough: true }) response: Response){
        const refreshToken = request.cookies;
        const token = await this.authService.logout(refreshToken);
        response.clearCookie('refreshToken');
        return token;
    }
}
