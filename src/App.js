import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Nav from "./Components/Nav/Nav";
import LandingPage from "./Pages/Landing Page/LandingPage";

function App() {
  return (
    <div className="App">

      <Nav />
     <Router>

    <Switch>

    <Route path="/" component={LandingPage} />

    </Switch>


     </Router>

    </div>
  );
}

export default App;
