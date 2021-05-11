import './App.css';
import Onboarding from "./components/Onboarding";
import CardList from "./components/CardList"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch >
          <Route exact path="/">
            <Onboarding />
          </Route>
          <Route path="/game" >
            <CardList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
