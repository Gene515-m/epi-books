import React, { useState } from "react";
import { Row, Button } from "react-bootstrap";
import SearchBook from "./SearchBook";
// import AjaxAPI from "./AjaxAPI";

/*let users = [
  {
    id: 1,
    name: "David",
    lastName: "Flanagan",
    email: "david.flanagan@mail.com",
  },
  {
    id: 2,
    name: "Marijn",
    lastName: "Haverbeke",
    email: "marijn.haverbeke@mail.com",
  },
  {
    id: 3,
    name: "Kyle",
    lastName: "Simpson",
    email: "kyle.simpson@mail.com",
  },
  {
    id: 4,
    name: "Douglas",
    lastName: "Crawford",
    email: "douglas.crawford.com",
  },
];
*/
const UserComponent = () => {
  const [users, setUser] = useState([]);
  const [search, setSearch] = useState();
  const handleSearch = (e) => setSearch(e.target.value);

  const loadUsers = () => {
    alert("Loading users...");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUser(json));
  };

  return (
    <>
      <Row>
        <Button variant="info" onClick={loadUsers}>
          Load data
        </Button>
      </Row>
      <Row>
        <SearchBook search={search} handleSearch={handleSearch} />
      </Row>
      <Row>
        <ul>
          {users
            .filter((user) => user.name.toLowerCase().includes(search))
            .map((user) => (
              <li>
                {user.name} {user.lastName}
              </li>
            ))}
        </ul>
      </Row>
    </>
  );
};

export default UserComponent;
