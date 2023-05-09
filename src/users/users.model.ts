import { ApiProperty } from "@nestjs/swagger";
import { Model, Table, Column, DataType, ForeignKey, BelongsToMany } from "sequelize-typescript";
import { City } from "src/cities/cities.model";
import { Univercity } from "src/universities/universities.model";
import { UserFriends } from "src/user-friends/user-friends.model";

interface UserCreationAttrs{
    login: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{
    @ApiProperty({example: 1, description: 'Уникальный идентификатор', required: false})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'qwerty', description: 'Логин', required: true})
    @Column({type: DataType.STRING, unique:true, allowNull: false})
    login: string;

    @ApiProperty({example: 'Qwerty123*', description: 'Пароль', required: true})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'Иванов', description: 'Фамилия', required: false})
    @Column({type: DataType.STRING, unique:true, allowNull: true})
    surname: string;

    @ApiProperty({example: 'Иван', description: 'Имя', required: false})
    @Column({type: DataType.STRING, unique:true, allowNull: true})
    firstname: string;

    @ApiProperty({example: 'Иванович', description: 'Отчество', required: false})
    @Column({type: DataType.STRING, unique:true, allowNull: true})
    patronomyc: string;

    @ApiProperty({example: 18, description: 'Возраст', required: false})
    @Column({type: DataType.INTEGER, unique: false, allowNull: true})
    age: number;

    @ApiProperty({example: 1, description: 'Идентификатор города', required: false})
    @ForeignKey(() => City)
    @Column({type: DataType.INTEGER, unique: false, allowNull: true})
    city_id: number;

    @ApiProperty({example: 1, description: 'Идентификатор вуза', required: false})
    @ForeignKey(() => Univercity)
    @Column({type: DataType.INTEGER, unique: false, allowNull: true})
    univercity_id: number;

    @ApiProperty({example: 'image.png', description: 'Строка загрузки картинки', required: false})
    @Column({type: DataType.STRING, unique: false, allowNull: true})
    profile_picture: string;

    @BelongsToMany(() => User, () => UserFriends)
    friends: User[];
}