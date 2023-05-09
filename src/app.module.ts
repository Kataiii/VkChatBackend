import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { CitiesModule } from './cities/cities.module';
import { UniversitiesModule } from './universities/universities.module';
import { City } from "./cities/cities.model";
import { Univercity } from "./universities/universities.model";
import { User } from "./users/users.model";
import { UserFriends } from "./user-friends/user-friends.model";
import { PostsModule } from './posts/posts.module';
import { PostModel } from "./posts/posts.model";
import { ChatsModule } from './chats/chats.module';
import { MessagesModule } from './chats/messages/messages.module';
import { Chat } from "./chats/chats.model";
import { Message } from "./chats/messages/messages.model";
import { AuthModule } from './auth/auth.module';
import { TokensModule } from './auth/tokens/tokens.module';
import { Token } from "./auth/tokens/tokens.model";


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [
                City,
                Univercity,
                User,
                UserFriends,
                PostModel,
                Chat,
                Message,
                Token
            ],
            autoLoadModels: true
          }),
        UsersModule,
        CitiesModule,
        UniversitiesModule,
        PostsModule,
        ChatsModule,
        MessagesModule,
        AuthModule,
        TokensModule,
    ]
})
export class AppModule{

}