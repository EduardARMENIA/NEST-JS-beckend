import {Column, Entity, PrimaryGeneratedColumn, ObjectIdColumn} from "typeorm";

@Entity('users')
export class User {
    @ObjectIdColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;
}
