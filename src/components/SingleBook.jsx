import React, { useState } from "react";
import { Col, Button, Card } from "react-bootstrap";

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);
  return (
    <Col>
      <Card
        style={{ width: "18rem", border: selected ? "2px solid #000" : "none" }}
        onClick={() => setSelected(!selected)}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.price}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
