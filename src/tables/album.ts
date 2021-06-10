import {Column, Entity, PrimaryGeneratedColumn,ManyToOne,OneToMany} from "typeorm";
import {Artist} from "./artist";
import {Track} from "./track";

@Entity()
export class Album {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column()
    name!: string;

    @Column()
    release_date!: string;

    @Column()
    description!: string;

    @Column()
    cover_img_url!: string;

    @ManyToOne(() => Artist, artist => artist.id,{onDelete: "CASCADE"})
    artist!: number;

    @OneToMany(() => Track, track => track.artist,{eager: true,onDelete: "CASCADE"})
    track!: Track[];

}