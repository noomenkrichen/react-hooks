import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import { useState } from "react";
import "./App.css";

function App() {
  const createMovie = (title, description, posterUrl, rate) => {
    return {
      title: title,
      description: description,
      posterUrl: posterUrl,
      rate: rate,
    };
  };

  const [movies, setMovies] = useState([
    createMovie(
      "Jumanji",
      "This is an adventure movie in the jungle",
      "img/jumanji.jpg",
      6.6
    ),
    createMovie(
      "Spider-Man",
      "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
      "img/spider-man.jpg",
      7.5
    ),
    createMovie(
      "Captain America",
      "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
      "img/captain-america.jpg",
      7.8
    ),
    createMovie(
      "The Avengers",
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      "img/avengers.jpg",
      8.0
    ),
  ]);

  const addMovie = () => {
    const title = prompt("title");
    const description = prompt("description");
    const posterUrl = prompt("posterUrl");
    const rate = prompt("rate");
    setMovies([...movies, createMovie(title, description, posterUrl, rate)]);
  };

  const filterMovies = () => {};

  return (
    <div className="App">
      <div id="movies" className="movie-list">
        <MovieList movies={movies} />
      </div>
      <div id="btn">
        <button onClick={addMovie}>Add movie</button>
      </div>
    </div>
  );
}

export default App;

//use Modal to input new movie details
