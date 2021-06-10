import {Column, Entity, PrimaryGeneratedColumn,OneToMany} from "typeorm";
import {Album} from "./album";
import {Track} from "./track";

@Entity()
export class Artist {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column()
    name!: string;

    @Column()
    genre!: string;

    @Column()
    formed_year!: number;

    @Column()
    biography!: string;

    @OneToMany(() => Album, album => album.artist,{eager: true,onDelete: "CASCADE"})
    album!: Album[];

    @OneToMany(() => Track, track => track.artist,{eager: true,onDelete: "CASCADE"})
    track!: Track[];
}