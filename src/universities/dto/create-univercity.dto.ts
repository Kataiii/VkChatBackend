import { ApiProperty } from "@nestjs/swagger";


export class CreateUnivercityDto{
    @ApiProperty({example: 'CГТУ им. Гагарина', description: 'Название вуза', required: true})
    readonly name : string;
}