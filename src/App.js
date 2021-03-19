import MovieList from "./components/MovieList";
import AddMovieModal from "./components/AddMovieModal";
import { useState } from "react";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
//import Rate from "./components/Rate";

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
    createMovie(
      "Spider-Man: Homecoming",
      "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
      "img/spider-man2.jpg",
      4.2
    ),
    createMovie(
      "The Godfather",
      "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      "img/god-father.jpg",
      4.2
    ),
    createMovie(
      "The Shawshank Redemption",
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "img/shawshank.jpg",
      4.2
    ),
    createMovie(
      "Dexter",
      "By day, mild-mannered Dexter is a blood-spatter analyst for the Miami police. But at night, he is a serial killer who only targets other murderers.",
      "img/dexter.jpg",
      4.2
    ),
  ]);

  const [display, setDisplay] = useState([...movies]);

  const addMovie = (obj) => {
    setMovies([...movies, obj]);
    setDisplay([...movies, obj]);
  };

  const searchMovies = (str) => {
    let arr = [...movies];
    setDisplay(
      arr.filter((el) => el.title.toLowerCase().includes(str.toLowerCase()))
    );
  };

  return (
    <div className="App">
      <MyNavbar searchMovies={searchMovies} />
      <AddMovieModal addMovie={addMovie} />

      <div className="movie-list">
        <MovieList movies={display} />
      </div>
    </div>
  );
}

export default App;
