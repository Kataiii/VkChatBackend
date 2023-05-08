import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Chat } from './chats.model';
import { CreateChatDto } from './dto/create-chat.dto';

@Injectable()
export class ChatsService {
    constructor(@InjectModel(Chat) private chatsRepository: typeof Chat){}

    async getAllChats(){
        const chats = await this.chatsRepository.findAll();
        return chats;
    }

    async create(dto: CreateChatDto){
        const chat = await this.chatsRepository.create(dto);
        return chat;
    }
}
