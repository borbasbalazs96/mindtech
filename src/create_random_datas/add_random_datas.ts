import {createConnection} from "typeorm";
import {Artist} from "../tables/artist";

createConnection().then(async (connection) => {
    const artistRepository = connection.getRepository(Artist);
    
    //előadók
    await artistRepository.save({
        name: 'The Beatles',
        genre: "Rock",
        formed_year: 1960,
        biography: "A The Beatles angol beatzenekar volt a popzene egyik legnagyobb hatású és legsikeresebb zenekara, amely 2004 végéig világszerte több mint 1,3 milliárd lemezt adott el, többet, mint bármely más együttes."
    });

    await artistRepository.save({
        name: 'The Rolling Stones',
        genre: "Rock",
        formed_year: 1962,
        biography: "A The Rolling Stones egy brit rockegyüttes, mely az 1960-as évek elején részt vett az úgynevezett brit invázióban."
    });
    await artistRepository.save({
        name: 'Tupac',
        genre: "Rap",
        formed_year: 1996,
        biography: "Az All Eyez on Me 2Pac amerikai rapelőadó dupla albuma."
    });
    await artistRepository.save({
        name: 'Pink Floyd',
        genre: "Progresszív Rock",
        formed_year: 2014,
        biography: "A Pink Floyd 1965-ben, Cambridge-ben alakult angol rockegyüttes."
    });
   
    await artistRepository.save({
        name: ' The Allman Brothers Band',
        genre: "Rock",
        formed_year: 1969,
        biography: "This band formed originally in 1969. The group changed its name repeatedly before it finally settled on one full of simplicity."
    });
    await artistRepository.save({
        name: 'Led Zeppelin',
        genre: "Rock",
        formed_year: 1969,
        biography: "Another British group that invaded America's airwaves, they quickly became one of the most popular bands of all time. "
    });
    await artistRepository.save({
        name: 'Justin Bieber',
        genre: "Pop",
        formed_year: 2009,
        biography: "2009-ben megjelent Bieber debütáló, One Time című kislemeze, amely tíz országban került a slágerlisták legjobb 30 száma közé. "
    });
    await artistRepository.save({
        name: 'The Who',
        genre: "Rock",
        formed_year: 1961,
        biography: "This British group is easily one of the most influential groups in the history of rock n' roll. "
    });
    await artistRepository.save({
        name: 'Sly & The Family Stone',
        genre: "Rock",
        formed_year: 1967,
        biography: "They were an important and influential American rock band and played a pivotal role in the development of soul, funk and psychedelic rock."
    });
    await artistRepository.save({
        name: 'The Band',
        genre: "Rock",
        formed_year: 1967,
        biography: "They were the influential Canadian-American rock n' roll group of the 60s and 70s, and their sound was the compilation of many elements: primarily old country music and early rock."
    });
    await artistRepository.save({
        name: 'Blood, Sweat & Tears',
        genre: "Rock",
        formed_year: 1967,
        biography: "Probably the greatest jazz-rock band of all time, their ability to fuse psychedelic rock n' roll with jazz is unmatched. "
    });
    await artistRepository.save({
        name: 'Aerosmith',
        genre: "Rock",
        formed_year: 1970,
        biography: "The great Boston rockers gave America someone to cheer for during the British invasion during the 70s."
    });
    await artistRepository.save({
        name: 'Queen',
        genre: "Rock",
        formed_year: 1970,
        biography: "This British rock band was one of the greatest influences on rock n' roll of today."
    });
    

    

    process.exit();
});