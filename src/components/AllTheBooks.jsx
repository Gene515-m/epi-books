import React, { useState } from "react";
// import { Col, Row, Button, Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import SearchBook from "./SearchBook";

const AllTheBooks = (props) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => setSearch(e.target.value);
  return (
    <>
      <Row>
        <SearchBook search={search} handleSearch={handleSearch} />
      </Row>
      <Row>
        {props.books
          .filter((book) => book.title.toLowerCase().includes(search))
          .map((book) => (
            <SingleBook book={book} />
          ))}
      </Row>
    </>
  );
};

export default AllTheBooks;
