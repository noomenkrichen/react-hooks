import React , {useState} from "react"
import MovieCard from './MovieCard'

const createMovie = (title, description, posterUrl, rate) => {
    return {
        title: title,
        description: description,
        posterUrl: posterUrl,
        rate: rate
    }
}

let movies = [
    createMovie("Jumanji","This is an adventure movie in the jungle","https://www.imdb.com/title/tt7975244/", 6.6),
    createMovie("Spider-Man","Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.","https://www.imdb.com/title/tt6320628/?ref_=tt_sims_tti", 7.5),
    createMovie("Captain America","Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.","https://www.imdb.com/title/tt3498820/?ref_=tt_sims_tti", 7.8),
    createMovie("The Avengers","Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","https://www.imdb.com/title/tt0848228/?ref_=tt_sims_tti", 8.0),
]

const MovieList = (props) => {
    console.log(movies);
    let list = movies.map(el => <MovieCard title={el.title} description={el.description} posterUrl={el.posterUrl} rate={el.rate}/>)
    console.log(list)
    return(
        {...list}
    );
}

export default MovieList;