import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";


interface TokenCreateAttrs{
    refresh_token: string;
    user_id: number;
    ip: string;
}

@Table({tableName: 'refresh_tokens'})
export class Token extends Model<Token, TokenCreateAttrs>{
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true,})
    id: number;

    @Column({type: DataType.STRING, unique: false})
    refresh_token: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, unique: false})
    account_id: number;
}