import MovieList from "./components/MovieList";
import AddMovieModal from "./components/AddMovieModal";
import { useState } from "react";
import "./App.css";
import MyNavbar from "./components/MyNavbar";

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
      4.0
    ),
    createMovie(
      "Spider-Man",
      "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
      "img/spider-man.jpg",
      4.5
    ),
    createMovie(
      "Captain America",
      "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
      "img/captain-america.jpg",
      4.8
    ),
    createMovie(
      "The Avengers",
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      "img/avengers.jpg",
      5.0
    ),
    createMovie(
      "Iron-Man",
      "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      "img/iron-man.jpg",
      4.2
    ),
    createMovie(
      "Hannibal",
      "Explores the early relationship between renowned psychiatrist, Hannibal Lecter, and his patient, a young FBI criminal profiler, who is haunted by his ability to empathize with serial killers.",
      "img/hannibal.jpg",
      4.2
    ),
  ]);

  const addMovie = (obj) => {
    setMovies([...movies, obj]);
    console.log(movies);
  };

  const filterMovies = () => {
    const arr = [...movies];
    const rate = prompt("Rate");
    setMovies(arr.filter((el) => el.rate >= rate));
  };

  const filterMoviesTitle = () => {
    const arr = [...movies];
    const str = prompt("Title");
    setMovies(
      arr.filter((el) => el.title.toLowerCase().includes(str.toLowerCase()))
    );
  };

  const searchMovies = () => {
    const arr = [...movies];
    const str = prompt("Word");
    setMovies(
      arr.filter(
        (el) =>
          el.title.toLowerCase().includes(str.toLowerCase()) ||
          el.description.toLowerCase().includes(str.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <MyNavbar/>
      <div id="movies" className="movie-list">
        <MovieList movies={movies} />
      </div>
      <div id="btn">
        <AddMovieModal addMovie={addMovie} />
      </div>
    </div>
  );
}

export default App;
