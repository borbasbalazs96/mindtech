import {createConnection} from "typeorm";
import {Album} from "../tables/album";

createConnection().then(async (connection) => {
    const albumRepository = connection.getRepository(Album);
    
    //előadók
    await albumRepository.save({
        name: 'Abbey Road',
        release_date: '1969.10.26.',
        description: 'Az Abbey Road a Beatles tizenkettedik albuma, mely 1969. szeptember 26-án jelent meg.',
        cover_img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqY6P3BbupaSbRbru0lBX59ts-LvpsJq1sZme3LFU&usqp=CAE&s',
        artist:1
    });

    await albumRepository.save({
        name: 'The Beatles',
        release_date: '1968.11.22.',
        description: 'A The Beatles, melyet gyakran Fehér Albumnak neveznek egyszínű fehér borítója miatt, a The Beatles együttes 1968. november 22-én megjelent egyetlen eredeti dupla albuma.',
        cover_img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTv4eqZPoaC4EppZSb4zY72oCY9U49Q2yxKCkpJ1M&usqp=CAE&s',
        artist:1
    });

    await albumRepository.save({
        name: 'Help!',
        release_date: '	1965.08.06.',
        description: 'Ezt senki nem is hallgatja',
        cover_img_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Help%21_%28The_Beatles_album_-_cover_art%29.jpg/220px-Help%21_%28The_Beatles_album_-_cover_art%29.jpg',
        artist:1
    });



    await albumRepository.save({
        name: 'Sticky Fingers',
        release_date: '1969.10.26.',
        description: 'A Sticky Fingers a The Rolling Stones együttes kilencedik stúdióalbuma, amely 1971. április 23-án jelent meg.',
        cover_img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY4xrmsxAmb7UoZTYS2uW5uWJTD0XVwj_kuJKEpLg&usqp=CAE&s',
        artist:2
    });

    await albumRepository.save({
        name: 'Let It Bleed',
        release_date: '1968.11.22.',
        description: '1969. december 5-én jelent meg a The Rolling Stones Let It Bleed című albuma.',
        cover_img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FySMYWffRnXvmEASOCDU0H4Fg076tsIB3SQYEPo&usqp=CAE&s',
        artist:2
    });



    await albumRepository.save({
        name: 'All Eyez on Me',
        release_date: '1996.02.22.',
        description: 'Az All Eyez on Me 2Pac amerikai rapelőadó dupla albuma.',
        cover_img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPCIJsfRirPXI__DDP7I9A1S4PbRFYpdvEz7MftQ&usqp=CAE&s',
        artist:3
    });

    await albumRepository.save({
        name: 'The Don Killuminati: The 7 Day Theory',
        release_date: '	1996.11.05.',
        description: 'A The Don Killumati: The 7 Day Theory Tupac Shakur Makaveli néven megjelent albuma volt.',
        cover_img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf_vsRVnMNE-B5t0gH8_wovZEmyXUgZgrjJqQsQzg&usqp=CAE&s',
        artist:3
    });

    await albumRepository.save({
        name: 'Me Against the World',
        release_date: '1995.03.14.',
        description: 'A Me Against the World Tupac Shakur harmadik stúdiólemeze.',
        cover_img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ71TZJt57U2_qEe0v3M1Z0WQU3b9AX26nc4dBgitw&usqp=CAE&s',
        artist:3
    });

    await albumRepository.save({
        name: 'Until the End of Time',
        release_date: '2001.03.27.',
        description: 'Az Until the End of Time a harmadik olyan 2Pac stúdióalbum, mely posztumusz kiadásként született.',
        cover_img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXtZvDYty38F-dB4fYFlQM-kNWK3f0ZUIsUxYYcUo&usqp=CAE&s',
        artist:3
    });
    await albumRepository.save({
        name: '2Pacalypse Now',
        release_date: '1991.11.12.',
        description: 'A 2Pacalypse Now az amerikai rapper, Tupac Shakur debütáló stúdióalbuma, amely 1991. november 12-én jelent meg.',
        cover_img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_pGF-4iXCTD5OS57kDq2PNvQOs-ZvRxzRAOsztU&usqp=CAE&s',
        artist:3
    });

    await albumRepository.save({
        name: 'R U Still Down? (Remember Me) (R U Still Down?)',
        release_date: '1997.11.25.',
        description: 'Az R U Still Down? (Remember Me) Tupac Shakur amerikai rapper második posztumusz albuma. ',
        cover_img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMn4ah08MPYb0Xdf7CCqLlAXGova1vrIJ4_ZfHU9E&usqp=CAE&s',
        artist:3
    });


    await albumRepository.save({
        name: 'The Dark Side of the Moon',
        release_date: '1973.03.24.',
        description: 'A The Dark Side of the Moon a Pink Floyd első koncepcióalbuma, mely 1973. március 24-én jelent meg.',
        cover_img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSZyd8033CUHjucnKnJGpWF8uxJP3kbJHp2SJiSM&usqp=CAE&s',
        artist:4
    });

    await albumRepository.save({
        name: 'Wish You Were Here',
        release_date: '1975.09.15.',
        description: 'A Wish You Were Here a Pink Floyd kilencedik albuma.',
        cover_img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSJe4fcwww3EkhmHFKIrn0jnX0jYJ8paySzgeXwaA&usqp=CAE&s',
        artist:4
    });
  
    

    

    process.exit();
});