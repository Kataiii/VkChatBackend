import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize';
import { User } from 'src/users/users.model';
import { Token } from './tokens.model';

@Injectable()
export class TokensService {
    constructor(@InjectModel(Token) private tokensRepository: typeof Token,
        private jwtService: JwtService) { }

    generateRefreshToken(user: User): string {
        const payload = { login: user.login, id: user.id }
        return this.jwtService.sign(payload);
    }

    async saveRefreshToken(refresh_token: string, user_id: number) {
        const tokens = await this.tokensRepository.findAll({ where: { account_id: user_id } });
        const deleteTokens = tokens.filter(token => Date.now() - token.createdAt >= 30);
        for (let i: number = 0; i < deleteTokens.length; i++) {
            await this.tokensRepository.destroy({ where: { id: deleteTokens[i].id } });
        }

        const token = await this.tokensRepository.create({
            refresh_token: refresh_token,
            user_id: user_id
        });
        return token;
    }

    async removeToken(refreshToken) {
        const tokenData = await this.tokensRepository.destroy({ where: { refresh_token: String(refreshToken) } });
        return tokenData;
    }
}