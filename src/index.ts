import express from 'express';
import {createConnection, createQueryBuilder} from "typeorm";
import {Artist} from "./tables/artist";
import {Album} from "./tables/album";
import {Track} from "./tables/track";

createConnection().then(connection => {
    const artistRepository = connection.getRepository(Artist);
    const albumRepository = connection.getRepository(Album);
    const trackRepository = connection.getRepository(Track);

    const app = express();

    

    app.use(express.json());
    
    //Előadó törlése
    app.get('/api/artist/delete_artist', async (req, res) => {
        var data
        if(req.query.artist_id){
            var id = Number(req.query.artist_id);
            await artistRepository.delete(id)
        }else{
            data = {erro_code: 'missing artist_id'}
        }
        res.send({
            data
        })  
    })
    
    //Előadó lekérdezése
    app.get('/api/artist/get_artist', async (req, res) => {
        var data
        const queryBuilder = 
        artistRepository.createQueryBuilder('artist')
                        .loadRelationCountAndMap('album.AlbumCount', 'artist.album')
                        .select(['artist.id','artist.name','artist.genre','artist.formed_year','artist.biography'])
        if(req.query.artist_id){
            queryBuilder.where("artist.id = '"+req.query.artist_id+"'")
            data = await queryBuilder.getOne()
        }else{
            data = {erro_code: 'missing artist_id'}
        }


        res.send({
            data
        })                
    })

    //Előadó szerkesztése
    app.get('/api/artist/update_artist', async (req, res) => {
        var data
        if(req.query.artist_id){
            const queryBuilder = createQueryBuilder().update(Artist)
            if(req.query.name){
                queryBuilder.set({ name: req.query.name })
            }
            if(req.query.genre){
                queryBuilder.set({ genre: req.query.genre })
            }
            if(req.query.formed_year){
                queryBuilder.set({ formed_year: req.query.formed_year })
            }
            if(req.query.biography){
                queryBuilder.set({ biography: req.query.biography })
            }
            
            queryBuilder.where("id = :id", { id: req.query.artist_id })
            queryBuilder.execute()
            data = {success: 'update successfull'}
        }else{
            data = {erro_code: 'missing artist_id'}
        }
        res.send({
            data
        })       
    })

    //Előadók listázása
    app.get('/api/artist/artist_list', async (req, res) => {
        const queryBuilder = 
        artistRepository.createQueryBuilder('artist')
                        .loadRelationCountAndMap('album.AlbumCount', 'artist.album')
                        .select(['artist.id','artist.name','artist.genre','artist.formed_year','artist.biography'])
        if(req.query.name){
            queryBuilder.where("artist.name LIKE '%"+req.query.name+"%'")
        }
        if(req.query.genre){
            queryBuilder.where("artist.genre = '"+req.query.genre+"'")
        }                
        
        const perPage = 10
        const page: number = parseInt(req.query.page as any) || 1
        
        if(req.query.order_by ){
            const order_by = req.query.order_by.toString()
            if(!req.query.order_type){
                queryBuilder.orderBy(order_by, 'ASC')
            }else{
                if(req.query.order_type == 'DESC'){
                    queryBuilder.orderBy(order_by, 'DESC')
                }else if(req.query.order_type == 'ASC'){
                    queryBuilder.orderBy(order_by, 'ASC')
                }
            }
            
        }

        queryBuilder.limit(perPage).offset((page - 1) * perPage)
        
        const data = await queryBuilder.getMany()
        const total = await artistRepository.count();

        res.send({
            data,
            total,
            page,
            last_page: Math.ceil(total / perPage)
        })


    })

    
    //Albumok listázása
    app.get('/api/album/album_list', async (req, res) => {
        const queryBuilder = 
        /*
        albumRepository.createQueryBuilder('album')
                        .loadRelationCountAndMap('album.TrackCount', 'album.track')
                        
                        //.leftJoinAndSelect('album.track','track')
                        .select(['album.id','album.name','album.release_date','album.description','album.cover_img_url'])
                        .innerJoin("album.artist", "artist")
                        //.addSelect('SUM(track.duration) as total_duration')
                        //.leftJoin('album.track','track')
                        //.addSelect('sum (track.duration) as total_duration')
        */   
        albumRepository.createQueryBuilder('album')            
                        .select(['album.id','album.name','album.release_date','album.description','album.cover_img_url'])
                        .innerJoin('album.artist','artist')
                        
                                  


        if(req.query.name){
            queryBuilder.where("album.name LIKE '%"+req.query.name+"%'")
        }
        if(req.query.artist_id){
            queryBuilder.andWhere('artist.id = :a_id', { a_id: req.query.artist_id });
        }                
        
        const perPage = 10
        const page: number = parseInt(req.query.page as any) || 1
        
        if(req.query.order_by ){
            const order_by = req.query.order_by.toString()
            if(!req.query.order_type){
                queryBuilder.orderBy(order_by, 'ASC')
            }else{
                if(req.query.order_type == 'DESC'){
                    queryBuilder.orderBy(order_by, 'DESC')
                }else if(req.query.order_type == 'ASC'){
                    queryBuilder.orderBy(order_by, 'ASC')
                }
            }
            
        }
    
        queryBuilder.limit(perPage).offset((page - 1) * perPage)
        
        var data = await queryBuilder.getRawMany()
        const total = await albumRepository.count()
        
        
        
        
        for(var i = 0; i < data.length;i++ ){
            var id = data[i]['album_id']
            let trackQuery = trackRepository.createQueryBuilder('track')
                                    .select(['track.duration'])
                                    .where('track.albumId = :albumid',{albumid: id})
            var trackResult  = await trackQuery.getMany()
            var total_duration = 0;
            if(trackResult){
                for(var j = 0;j < trackResult.length; j++){
                    total_duration = total_duration + trackResult[j]['duration'];
                }
            }    
                

            var totalTracks = await trackRepository.count({ where: {album: id} });    
                
            data[i]['total_track'] =  totalTracks
            data[i]['total_duration'] =  total_duration                
        }

        res.send({
            data,
            total,
            page,
            last_page: Math.ceil(total / perPage)
        })
    
    
    })

    //Album lekérdezése
    app.get('/api/album/get_album', async (req, res) => {
        var data
        if(req.query.album_id){
        var getAlbum = 
        albumRepository.createQueryBuilder('album')
                        .where("album.id = '"+req.query.album_id+"'")   
                        //.loadRelationCountAndMap('album.TrackCount', 'album.track')
                        .select(['album.id','album.name','album.release_date','album.description','album.cover_img_url'])
                        //.innerJoinAndSelect('album.track','track')
            data = await getAlbum.getRawMany()
            var tracks = ""
            for(var i = 0; i <= data.length;i++ ){
                var id = req.query.album_id
                let trackQuery = trackRepository.createQueryBuilder('track')
                                        .select(['track.name','track.duration','track.genre'])
                                        .where('track.albumId = :albumid',{albumid: id})
                var trackResult  = await trackQuery.getMany()
                tracks = JSON.stringify(trackResult)   
            }
            data[0]['tracks'] = tracks
        }else{
            data = {erro_code: 'missing album_id'}
        }


        res.send({
            data
        })                
    })


    app.listen(8000);
});




