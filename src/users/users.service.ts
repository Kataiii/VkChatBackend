import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private usersRepository: typeof User){}

    async createUser(dto: CreateUserDto){
        const user = await this.usersRepository.create(dto);
        return user;
    }

    async getAllUsers(){
        const users = await this.usersRepository.findAll();
        return users;
    }
}
