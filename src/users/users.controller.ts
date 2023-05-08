import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @ApiOperation({summary: 'Get all users'})
    @ApiResponse({ status: 200, type: [User]})
    @ApiResponse({status: 401, description: 'Пользователь не авторизован'})
    @Get()
    getAll(){
        const users = this.usersService.getAllUsers();
        return users;
    }

    @ApiOperation({summary: 'Create account'})
    @ApiResponse({ status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.usersService.createUser(userDto);
    }
}
