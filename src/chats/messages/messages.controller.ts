import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './messages.model';
import { MessagesService } from './messages.service';

@ApiTags('Messages')
@Controller('messages')
export class MessagesController {
    constructor(private messagesService : MessagesService){}

    @ApiOperation({summary: 'Create message'})
    @ApiResponse({ status: 200, type: Message})
    @Post()
    create(@Body() dto : CreateMessageDto){
        return this.messagesService.create(dto);
    }

    @ApiOperation({summary: 'Get all messages'})
    @ApiResponse({status: 200, type: [Message]})
    @Get()
    getAll(){
        return this.messagesService.getAllMessages();
    }
}
