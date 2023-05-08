import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { User } from "src/users/users.model";


@Table({tableName: 'user_friends', createdAt: false, updatedAt: false})
export class UserFriends extends Model<UserFriends>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, unique: false, allowNull: true})
    user_id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, unique: false, allowNull: true})
    friend_id: number;
}