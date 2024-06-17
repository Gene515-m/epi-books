import { Container, Button } from "react-bootstrap";
import "./App.css";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import fantasy from "./books/fantasy.json";
import history from "./books/history.json";
import horror from "./books/horror.json";
import romance from "./books/romance.json";
import scifi from "./books/scifi.json";
// import { history, fantasy, horror, romance, scifi } from "./books/";
import { useState } from "react";
import UserComponent from "./components/UserComponent";

const App = () => {
  // let type ='fantasy'
  let [type, setType] = useState("fantasy");

  return (
    <>
      <MyNav />
      <Container className="my-3">
        <Welcome />

        <Button
          className="me-2"
          variant="primary"
          onClick={() => setType("history")}
        >
          History
        </Button>
        <Button
          className="me-2"
          variant="primary"
          onClick={() => setType("fantasy")}
        >
          Fantasy
        </Button>
        <Button
          className="me-2"
          variant="primary"
          onClick={() => setType("horror")}
        >
          Horror
        </Button>
        <Button
          className="me-2"
          variant="primary"
          onClick={() => setType("romance")}
        >
          Romance
        </Button>
        <Button variant="primary" onClick={() => setType("scifi")}>
          Scifi
        </Button>

        {type === "history" && <AllTheBooks books={history} />}
        {type === "fantasy" && <AllTheBooks books={fantasy} />}
        {type === "horror" && <AllTheBooks books={horror} />}
        {type === "romance" && <AllTheBooks books={romance} />}
        {type === "scifi" && <AllTheBooks books={scifi} />}

        <UserComponent />
      </Container>
      <MyFooter />
    </>
  );
};

export default App;
