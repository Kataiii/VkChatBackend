import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{
    @ApiProperty({example: 'qwerty', description: 'Логин', required: true})
    readonly login: string;

    @ApiProperty({example: 'Qwerty123*', description: 'Пароль', required: true})
    readonly password: string;

    constructor(login, password){
        this.login = login;
        this.password = password;
    }
}