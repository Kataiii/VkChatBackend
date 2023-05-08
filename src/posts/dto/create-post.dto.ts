import { ApiProperty } from "@nestjs/swagger";


export class CreatePostDto{
    @ApiProperty({example: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
        Lorem Ipsum является стандартной "рыбой" 
        для текстов на латинице с начала XVI века. 
        В то время некий безымянный печатник создал большую 
        коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.`,
        description: 'Контент поста',
        required: true
    })
    content: string;

    @ApiProperty({example: 'cat.png', description: 'Ссылка на картинку', required: false})
    image: string;

    @ApiProperty({example: 1, description: 'Id пользователя', required: true})
    user_id: number;
}