import React , {useState} from "react"


const MovieCard = (props) => {

    return(
        <div>
            <h1>{props.title}</h1>
            <div>{props.description}</div>
            <div>{props.posterUrl}</div>
            <div>{props.rate}</div>
        </div>
    );
}

export default MovieCard;