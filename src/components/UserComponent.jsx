import React, { useState } from "react";
import { Row, Button } from "react-bootstrap";
import SearchBook from "./SearchBook";

const UserComponent = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => setSearch(e.target.value);

  const loadUsers = () => {
    alert("Loading users...");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  };

  const removeUsers = (user) => {
    alert("User deleted" + " " + user.name);
    fetch("https://jsonplaceholder.typicode.com/users" + user.id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        setUsers(users.filter((u) => u.id !== user.id));
      });
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
              <li className="mb-2">
                {user.name} {user.lastName} - {user.email}
                <Button
                  variant="danger"
                  size="sm"
                  className="float-end"
                  onClick={() => removeUsers(user)}
                >
                  x
                </Button>
              </li>
            ))}
        </ul>
      </Row>
    </>
  );
};

export default UserComponent;
