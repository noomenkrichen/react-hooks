import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-stars";

const MovieCard = ({ movie }) => {
  const ratingChanged = (newRating) => {
    movie.rate = newRating;
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          color2={"#ffd700"}
          value={movie.rate}
        />
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
