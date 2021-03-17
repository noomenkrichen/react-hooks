import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return movies.map((el, i) => (
    <div id={i}>
      <MovieCard
        title={el.title}
        description={el.description}
        posterUrl={el.posterUrl}
        rate={el.rate}
      />
    </div>
  ));
};

export default MovieList;
