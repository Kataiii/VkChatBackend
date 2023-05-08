import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ChatsController } from './chats.controller';
import { Chat } from './chats.model';
import { ChatsService } from './chats.service';

@Module({
  controllers: [ChatsController],
  providers: [ChatsService],
  imports: [
    SequelizeModule.forFeature([Chat])
  ]
})
export class ChatsModule {}
