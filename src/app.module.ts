import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {User} from "./user.entity";
import {JwtModule} from "@nestjs/jwt";
import { ConfigModule } from '@nestjs/config';
@Module({
    imports: [
        ConfigModule.forRoot({envFilePath: '.env',}),
        TypeOrmModule.forRoot({
            useUnifiedTopology: true,
            type: "mongodb",
            database: process.env.DATEBASE_NAME ,
            synchronize: true,
            logging: ['query', 'error'],
            entities: [User],
            migrations: [],
            subscribers: [],
        }),
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: process.env.SECRET_KEY,
            signOptions: {expiresIn: '1d'}
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
