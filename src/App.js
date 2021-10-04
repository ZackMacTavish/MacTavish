import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Customcursor from "./Components/CustomCursor/customcursor";
import Nav from "./Components/Nav/Nav";

import Art from "./Pages/Art Landing/Art";
import Composition from "./Pages/COMPOSITION/Composition";
import LandingPage from "./Pages/Landing Page/LandingPage";
import Photography from "./Pages/Photography/Photography";

function App() {
  return (
    <div className="App">
     
    
     <Router>
     <Customcursor />
     <Nav />
    <Switch>
    
    <Route path="/Composition" component={Composition} />

    <Route path="/Photography" component={Photography} />

    <Route path="/Art" component={Art} />

    <Route exact path="/MacTavish" component={LandingPage} />

    </Switch>


     </Router>

    </div>
  );
}

export default App;
