import React from "react";
import { Col, Form } from "react-bootstrap";

const SearchBook = ({ search, handleSearch }) => {
  return (
    <Col>
      <Form.Group className="m-4" controlId="formBasicEmail">
        <Form.Label>Search:</Form.Label>
        <Form.Control
          type="search"
          placeholder="Search book"
          value={search}
          onChange={handleSearch}
        />
      </Form.Group>
    </Col>
  );
};

export default SearchBook;
