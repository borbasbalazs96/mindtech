import {createConnection} from "typeorm";
import {Track} from "../tables/track";

createConnection().then(async (connection) => {
    const trackRepository = connection.getRepository(Track);
    
    //előadók
    await trackRepository.save({
            name: "Come Together",
            genre: 'Rock',
            duration: 259,
            artist:1,
            album:1
    });
    await trackRepository.save({
        name: "Something",
        genre: 'Rock',
        duration: 183,
        artist:1,
        album:1
    });
    await trackRepository.save({
        name: "Maxwell's Silver Hammer",
        genre: 'Rock',
        duration: 207,
        artist:1,
        album:1
    });
    await trackRepository.save({
        name: "Back In The U.S.S.R.",
        genre: 'Rock',
        duration: 163,
        artist:1,
        album:2
    });
    await trackRepository.save({
        name: "Dear Prudence",
        genre: 'Rock',
        duration: 236,
        artist:1,
        album:2
    });
    await trackRepository.save({
        name: "Glass Onion",
        genre: 'Rock',
        duration: 138,
        artist:1,
        album:2
    });

    await trackRepository.save({
        name: "Help!",
        genre: 'Rock',
        duration: 141,
        artist:1,
        album:3
    });
    await trackRepository.save({
        name: "The Night Before",
        genre: 'Rock',
        duration: 155,
        artist:1,
        album:3
    });
    await trackRepository.save({
        name: "You've Got To Hide Your Love Away",
        genre: 'Rock',
        duration: 131,
        artist:1,
        album:3
    });


    await trackRepository.save({
        name: "Brown Sugar",
        genre: 'Rock',
        duration: 230,
        artist:2,
        album:4
    });

    await trackRepository.save({
        name: "Sway",
        genre: 'Rock',
        duration: 233,
        artist:2,
        album:4
    });
    await trackRepository.save({
        name: "Gimme Shelter",
        genre: 'Rock',
        duration: 273,
        artist:2,
        album:5
    });
    await trackRepository.save({
        name: "Love In Vain",
        genre: 'Rock',
        duration: 259,
        artist:2,
        album:5
    });
    await trackRepository.save({
        name: "Country Honk",
        genre: 'Rock',
        duration: 187,
        artist:2,
        album:5
    });


    
    
    
    process.exit();
})