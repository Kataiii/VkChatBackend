import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './messages.model';

@Injectable()
export class MessagesService {
    constructor(@InjectModel(Message) private messagesService: typeof Message){}

    async getAllMessages(){
        const messages = await this.messagesService.findAll();
        return messages;
    }

    async create(dto: CreateMessageDto){
        const message = await this.messagesService.create(dto);
        return message;
    }
}
