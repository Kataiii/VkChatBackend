import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Chat } from './chats.model';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';

@ApiTags('Chats')
@Controller('chats')
export class ChatsController {
    constructor(private chastsService: ChatsService){}

    @ApiOperation({summary: 'Create chat'})
    @ApiResponse({ status: 200, type: Chat})
    @Post()
    create(@Body() dto : CreateChatDto){
        return this.chastsService.create(dto);
    }

    @ApiOperation({summary: 'Get all chats'})
    @ApiResponse({status: 200, type: [Chat]})
    @Get()
    getAll(){
        return this.chastsService.getAllChats();
    }
}
