import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Blog} from "./blog.entity";
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

    @OneToMany(() => Blog, (blog:Blog) => blog.category)
    blogs :Blog[]
}
