import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn,   } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Auth extends BaseEntity {
    @PrimaryColumn()
    uid!: number;

    @Column()
    loginUserUid!: number;

    @Column()
    token: string;

    @Column()
    loginAt: string;

    @ManyToOne(
        () => User,
        (user) => user.userUid,
    )

    user!: User;
}