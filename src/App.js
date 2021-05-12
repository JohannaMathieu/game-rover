import './App.css';
import { useState, useEffect} from 'react';
import Onboarding from "./components/Onboarding";
import CardList from "./components/CardList"
import Win from "./components/Win"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3000&PANCAM&page=1&api_key=yyjak0ojMEER3TBGfBUCWH2OiMijbsmwos54Xrt4





  
 


function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2000&PANCAM&page=1&api_key=yyjak0ojMEER3TBGfBUCWH2OiMijbsmwos54Xrt4')
      .then(response => response.json())
      .then(data => {
        setData(data)
        
      })
  
  }, [])


  //console.log(data)


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
          <Route path="/win" >
            <Win />
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
