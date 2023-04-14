import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
@Entity('categories')
export class Category {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    description:string;

    @CreateDateColumn()
    created_at:string;

    @UpdateDateColumn()
    updated_at:string;
}
