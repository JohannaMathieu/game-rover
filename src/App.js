import "./App.css";
import { useState, useEffect } from "react";
import Onboarding from "./components/Onboarding";
import axios from "axios";
import CardList from "./components/CardList";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Chuck from "./components/Chuck";

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3000&PANCAM&page=1&api_key=yyjak0ojMEER3TBGfBUCWH2OiMijbsmwos54Xrt4

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2000&PANCAM&page=1&api_key=yyjak0ojMEER3TBGfBUCWH2OiMijbsmwos54Xrt4"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const [chuck, setChuck] = useState([]);

  useEffect(() => {
    var instance = axios.create({
      baseURL: "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
    });
    instance.defaults.headers.common["x-rapidapi-key"] =
      "94aebcf4afmsha42e3bb3f8da45dp11ac41jsncd2b74ed5531";
    instance
      .get("/jokes/random")
      .then(function (response) {
        console.log(response);
        setChuck(response.data.value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(chuck);

  //console.log(data)

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Onboarding />
          </Route>
          <Route path="/game">
            <CardList />
          </Route>
          <Route path="/chuck">
            <Chuck quote={chuck} />
          </Route>
          <Route path="/win">
            <Chuck quote={chuck} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
