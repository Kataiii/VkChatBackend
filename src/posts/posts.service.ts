import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostDto } from './dto/create-post.dto';
import { PostModel } from './posts.model';

@Injectable()
export class PostsService {
    constructor(@InjectModel(PostModel) private postsRepository: typeof PostModel){}

    async getAllPosts(){
        const posts = await this.postsRepository.findAll();
        return posts;
    }

    async create(dto: CreatePostDto){
        const post = await this.postsRepository.create(dto);
        return post;
    }
}
