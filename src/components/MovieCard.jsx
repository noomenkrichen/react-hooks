import React from "react";

const MovieCard = (props) => {
  return (
    <>
      <img src={props.posterUrl} alt="poster" />
      <h1>{props.title}</h1>
      <div>{props.description}</div>
      <div>{props.rate}</div>
    </>
  );
};

export default MovieCard;
