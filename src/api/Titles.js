import { serverApiUrl } from "../index";

//get all titles
export const  getAllTitles = (callback) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json'); 
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('X-RapidAPI-Key', '4fb86ad23bmshe15a93fd7843211p199156jsnddc336097524');
    headers.append('X-RapidAPI-Host', 'anime-db.p.rapidapi.com');
    
    fetch(serverApiUrl+'?page=1&size=50',
        {method: 'GET', headers})
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}


export const  getAnimeById = (animeID, callback) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json'); 
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('X-RapidAPI-Key', '4fb86ad23bmshe15a93fd7843211p199156jsnddc336097524');
    headers.append('X-RapidAPI-Host', 'anime-db.p.rapidapi.com');
    
    fetch(serverApiUrl+'/by-id/'+animeID,
        {method: 'GET', headers})
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}