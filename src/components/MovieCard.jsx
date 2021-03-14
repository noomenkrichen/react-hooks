import React , {useState} from "react"


const MovieCard = () => {
    const [title, setTitle] = useState("My Title");
    const [description, setDescription] = useState("this is a test movie description");
    const [posterUrl, setPosterUrl] = useState("http://www.kcs.tn");
    const [rate, setRate] = useState(0);

    return(
        <div>
            <h1>{title}</h1>
            <div>{description}</div>
            <div>{posterUrl}</div>
            <div>{rate}</div>
        </div>
    );
}

export default MovieCard;