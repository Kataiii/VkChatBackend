import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { Token } from './tokens.model';
import { TokensService } from './tokens.service';

@Module({
  providers: [TokensService],
  imports: [
    SequelizeModule.forFeature([Token]),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY_REFRESH || 'SECRET',
      signOptions: {
        expiresIn: '30d'
      }
    })
  ],
  exports: [
    TokensService
  ]
})
export class TokensModule {}
