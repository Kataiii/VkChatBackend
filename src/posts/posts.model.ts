import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface PostCreationAttrs{
    content: string;
    image?: string;
    user_id: number;
}

@Table({tableName: 'posts'})
export class PostModel extends Model<PostModel, PostCreationAttrs>{
    @ApiProperty({example: 1, description: 'Уникальный идентификатор', required: false})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
        Lorem Ipsum является стандартной "рыбой" 
        для текстов на латинице с начала XVI века. 
        В то время некий безымянный печатник создал большую 
        коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.`,
        description: 'Контент поста',
        required: true
    })
    @Column({type: DataType.TEXT, unique: false, allowNull: false})
    content: string;

    @ApiProperty({example: 'cat.png', description: 'Ссылка на картинку', required: false})
    @Column({type: DataType.STRING, unique: false, allowNull: true})
    image: string;

    @ApiProperty({example: 1, description: 'Id пользователя', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    user_id: number;

    @ApiProperty({example: 10, description: 'Количество лайков', required: false})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false, defaultValue: 0})
    count_likes: number;
}