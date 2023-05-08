import { ApiProperty } from "@nestjs/swagger";
import { Model, Table, Column, DataType, ForeignKey} from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Chat } from "../chats.model";


interface CreateMessageAttrs{
    chat_id: number;
    sender_id: number;
    content: string;
}

export class Message extends Model<Message, CreateMessageAttrs>{
    @ApiProperty({example: 1, description: 'Уникальный идентификатор', required: false})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 1, description: 'Id чата', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    @ForeignKey(() => Chat)
    chat_id: number;

    @ApiProperty({example: 1, description: 'Id отправителя', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    @ForeignKey(() => User)
    sender_id: number;

    @ApiProperty({example: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
        Lorem Ipsum является стандартной "рыбой" 
        для текстов на латинице с начала XVI века. 
        В то время некий безымянный печатник создал большую 
        коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.`,
        description: 'Текст сообщения',
        required: true
    })
    @Column({type: DataType.TEXT, unique: false, allowNull: false})
    content: string;

    @ApiProperty({example: true, description: 'Статус сообщения', required: false})
    @Column({type: DataType.BOOLEAN, unique: false, allowNull: false, defaultValue: false})
    is_read: boolean;
}