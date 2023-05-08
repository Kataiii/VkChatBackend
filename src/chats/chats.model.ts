import { ApiProperty } from "@nestjs/swagger";
import { Model, Table, Column, DataType, ForeignKey} from "sequelize-typescript";
import {User} from "../users/users.model"

interface ChatCreationAttrs{
    admin_id: number;
    user_id: number;
}

@Table({tableName: 'chats'})
export class Chat extends Model<Chat, ChatCreationAttrs>{
    @ApiProperty({example: 1, description: 'Уникальный идентификатор', required: false})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 1, description: 'Id создателя чата', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    @ForeignKey(() => User)
    admin_id: number;

    @ApiProperty({example: 1, description: 'Id участника чата', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    @ForeignKey(() => User)
    user_id: number;
}