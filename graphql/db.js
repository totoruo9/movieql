import fetch from "node-fetch";
import axios from "axios";

const MovieApi = axios.create({
    baseURL: "https://yts.mx/api/v2/list_movies.json",
})

export const getMovies = async(limit, rating) => {
    let queryText = [];
    if(limit > 0){
        queryText.push(`limit=${limit}`);
    }
    if(rating >0){
        queryText.push(`minimum_rating=${rating}`);
    }
    if(queryText.length !== 0){
        queryText = `?${queryText.join("&")}`;
    }else {
        queryText.push("/");
        queryText = queryText.join("");
    }
    let REQUEST_URL = await MovieApi.get(queryText);
    const {data: {data: {movies}}} = REQUEST_URL;
    return movies;
}

export const getMovie = async(id) => {
    const getMovie = await getMovies();
    return getMovie.filter(movie => movie.id === id);
}