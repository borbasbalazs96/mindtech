import {Column, Entity, PrimaryGeneratedColumn,ManyToOne,JoinColumn} from "typeorm";
import {Artist} from "./artist";
import {Album} from "./album";

@Entity()
export class Track {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column()
    name!: string;

    @Column()
    duration!: number;

    @Column()
    genre!: string;

    @ManyToOne(() => Artist, artist => artist.id,{onDelete: "CASCADE"})
    artist!: number;
    
    @ManyToOne(() => Album, album => album.id,{onDelete: "CASCADE"})
    album!: number;

}