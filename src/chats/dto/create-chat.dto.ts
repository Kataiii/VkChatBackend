import { ApiProperty } from "@nestjs/swagger";


export class CreateChatDto{
    @ApiProperty({example: 1, description: 'Id создателя чата', required: true})
    admin_id: number;

    @ApiProperty({example: 1, description: 'Id участника чата', required: true})
    user_id: number;
}