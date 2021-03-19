import React from "react";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import ReactStars from "react-stars";
const Rate = (props) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">My Movies App</Navbar.Brand>
      <Nav className="mr-auto">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          color2={"#ffd700"}
        />
        {/* <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search movie by title"
          className="mr-sm-2"
          onChange={(e) => props.searchMovies(e.target.value)}
        />
        {/* <Button variant="outline-info">Search</Button> */}
      </Form>
    </Navbar>
  );
};

export default Rate;
