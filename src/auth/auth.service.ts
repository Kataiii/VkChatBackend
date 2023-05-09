import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException, UnauthorizedException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt/dist';
import * as bcryptjs from 'bcryptjs';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { TokensService } from './tokens/tokens.service';
import { User } from 'src/users/users.model';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService,
        private usersService: UsersService,
        private tokensService: TokensService){}

    async login(dto: CreateUserDto){
        const account = await this.validateAccount(dto);
        const refreshToken = this.tokensService.generateRefreshToken(account);
        await this.tokensService.saveRefreshToken(refreshToken, account.id);
        const accessToken = await this.generateAccessToken(account);

        return {account, accessToken, refreshToken};
    }

    async register(dto: CreateUserDto){
        let account = await this.usersService.getUserByLogin(dto.login);
        if(account != null) throw new HttpException("Такой аккаунт уже существует", HttpStatus.BAD_REQUEST);
        const hashPassword = await bcryptjs.hash(dto.password, 10);
        account = await this.usersService.createUser(new CreateUserDto(dto.login, hashPassword));

        const refreshToken = this.tokensService.generateRefreshToken(account);
        await this.tokensService.saveRefreshToken(refreshToken, account.id);
        const accessToken = await this.generateAccessToken(account);

        return {account, accessToken, refreshToken};
    }

    private async generateAccessToken(user: User){
        const payload = {login: user.login, id: user.id}
        return this.jwtService.sign(payload);
    }

    //TODO обновление access токена
    async refresh(){

    }

    //TODO удаление всех токенов
    async logout(refreshToken){
        const tokenValue = refreshToken.refreshToken;
        const token = await this.tokensService.removeToken(tokenValue);
        return token;
    }

    //TODO получение сслки для подтверждения почты
    async getActivateLink(){

    }

    private async validateAccount(dto: CreateUserDto){
        const account = await this.usersService.getUserByLogin(dto.login);
        if(account == null){
            throw new UnauthorizedException('Неверный пароль или логин');
        }
        const passwordEqual = await bcryptjs.compare(dto.password, account.password);
        if(account && passwordEqual){
            return account;
        }

        throw new UnauthorizedException('Неверный пароль или логин');
    }
}
