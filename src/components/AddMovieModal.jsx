import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function AddMovieModal(props) {
  const [show, setShow] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rate, setRate] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Movie title..."
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="file"
            name="posterUrl"
            id="poster"
            placeholder="Movie poster..."
            onChange={(e) => setPosterUrl(e.target.value)}
          />
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="Movie description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input
            type="number"
            name="rate"
            id="rate"
            onChange={(e) => setRate(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              props.addMovie({
                title: title,
                description: description,
                posterUrl: `img/${posterUrl.split("\\")[2]}`,
                rate: rate,
              })
            }
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovieModal;
