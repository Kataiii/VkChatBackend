import { ApiProperty } from "@nestjs/swagger";


export class CreateMessageDto{
    @ApiProperty({example: 1, description: 'Id чата', required: true})
    chat_id: number;

    @ApiProperty({example: 1, description: 'Id отправителя', required: true})
    sender_id: number;

    @ApiProperty({example: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
        Lorem Ipsum является стандартной "рыбой" 
        для текстов на латинице с начала XVI века. 
        В то время некий безымянный печатник создал большую 
        коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.`,
        description: 'Текст сообщения',
        required: true
    })
    content: string;
}