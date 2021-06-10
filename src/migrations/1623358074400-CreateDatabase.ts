import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDatabase1623358074400 implements MigrationInterface {
    name = 'CreateDatabase1623358074400'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `track` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `duration` int NOT NULL, `genre` varchar(255) NOT NULL, `artistId` int NULL, `albumId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `artist` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `genre` varchar(255) NOT NULL, `formed_year` int NOT NULL, `biography` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `album` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `release_date` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `cover_img_url` varchar(255) NOT NULL, `artistId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `track` ADD CONSTRAINT `FK_997cfd9e91fd00a363500f72dc2` FOREIGN KEY (`artistId`) REFERENCES `artist`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `track` ADD CONSTRAINT `FK_b105d945c4c185395daca91606a` FOREIGN KEY (`albumId`) REFERENCES `album`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `album` ADD CONSTRAINT `FK_3d06f25148a4a880b429e3bc839` FOREIGN KEY (`artistId`) REFERENCES `artist`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `album` DROP FOREIGN KEY `FK_3d06f25148a4a880b429e3bc839`");
        await queryRunner.query("ALTER TABLE `track` DROP FOREIGN KEY `FK_b105d945c4c185395daca91606a`");
        await queryRunner.query("ALTER TABLE `track` DROP FOREIGN KEY `FK_997cfd9e91fd00a363500f72dc2`");
        await queryRunner.query("DROP TABLE `album`");
        await queryRunner.query("DROP TABLE `artist`");
        await queryRunner.query("DROP TABLE `track`");
    }

}
