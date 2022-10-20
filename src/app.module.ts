import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {User} from "./user.entity";
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            useUnifiedTopology: true,
            type: "mongodb",
            database: "datebase",
            synchronize: true,
            logging: ['query', 'error'],
            entities: [User],
            migrations: [],
            subscribers: [],
        }),
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: 'secret',
            signOptions: {expiresIn: '1d'}
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
