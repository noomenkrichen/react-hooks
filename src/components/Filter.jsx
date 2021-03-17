import React from "react";
import MovieCard from "./MovieCard";

const Filter = ({ movies, rate }) => {
  return movies.filter(
    (el, i) =>
      el.rate >= rate && (
        <div id={i}>
          <MovieCard
            title={el.title}
            description={el.description}
            posterUrl={el.posterUrl}
            rate={el.rate}
          />
        </div>
      )
  );
};

export default Filter;
