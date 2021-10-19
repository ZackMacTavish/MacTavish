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
import ThreeD from "./Pages/3d/ThreeD";

import Art from "./Pages/Art Landing/Art";
import Collages from "./Pages/Collages/Collages";
import Composition from "./Pages/COMPOSITION/Composition";
import Dwelling from "./Pages/Dwelling/Dwelling";
import Graffiti from "./Pages/Graffiti/Graffiti";
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

    <Route path="/Dwelling" component={Dwelling} />

    <Route path="/Photography" component={Photography} />

    <Route path="/Collages" component={Collages} />

    <Route path="/Graffiti" component={Graffiti} />

    <Route path="/3d" component={ThreeD} />

    <Route path="/Art" component={Art} />

    <Route exact path="/MacTavish" component={LandingPage} />

    </Switch>


     </Router>

    </div>
  );
}

export default App;
