import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Auth } from "./auth.entity";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    userUid!: number

    @Column()
    uuid!: string

    @Column()
    id!: string

    @Column()
    password!: string

    @Column()
    nickname: string

    @UpdateDateColumn()
    updateAt!: string

    @CreateDateColumn()
    createAt!: string

    @Column({type: 'boolean'})
    deleted: boolean

    @OneToMany(
        () => Auth,
        (auth) => auth.loginUserUid,
    )

    loginUserUid!: Auth[]
}