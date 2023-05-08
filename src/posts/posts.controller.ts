import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { PostModel } from './posts.model';
import { PostsService } from './posts.service';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService){}

    @ApiOperation({summary: 'Create post'})
    @ApiResponse({ status: 200, type: PostModel})
    @Post()
    create(@Body() dto : CreatePostDto){
        return this.postsService.create(dto);
    }

    @ApiOperation({summary: 'Get all posts'})
    @ApiResponse({status: 200, type: [PostModel]})
    @Get()
    getAll(){
        return this.postsService.getAllPosts();
    }
}
