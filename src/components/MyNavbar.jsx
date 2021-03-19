import React from "react";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";

const MyNavbar = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">My Movies App</Navbar.Brand>
      <Nav className="mr-auto">
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

export default MyNavbar;
