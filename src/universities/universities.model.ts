import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";


interface UnivercityCreationAttrs{
    name: string;
}

@Table({tableName: 'universities', createdAt: false, updatedAt: false})
export class Univercity extends Model<Univercity, UnivercityCreationAttrs>{
    @ApiProperty({example: 1, description: 'Уникальный идентификатор', required: false})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'СГТУ им. Гагарина', description: 'Название вуза', required: true})
    @Column({type: DataType.STRING, allowNull: false})
    name: string;
}