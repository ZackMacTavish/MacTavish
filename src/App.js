import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme, GlobalStyles} from './Components/Themes/Themes';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Customcursor from "./Components/CustomCursor/customcursor";
import Nav from "./Components/Nav/Nav";
import ThreeD from "./Pages/3d/ThreeD";
import About from "./Pages/About/About";
import AccessDirect from "./Pages/Access Direct/AD";

import Art from "./Pages/Art Landing/Art";
import Collages from "./Pages/Collages/Collages";
import Composition from "./Pages/COMPOSITION/Composition";
import Design from "./Pages/Design Landing/Design";
import Dwelling from "./Pages/Dwelling/Dwelling";
import Giga from "./Pages/Giga/Giga";
import Graffiti from "./Pages/Graffiti/Graffiti";
import GraphicDesign from "./Pages/Graphic Design/Graphicdesign";
import LandingPage from "./Pages/Landing Page/LandingPage";
import Outsource from "./Pages/Outsource/Outsource";
import Painting from "./Pages/Painting/Painting";
import Photography from "./Pages/Photography/Photography";
import Printmaking from "./Pages/Printmaking/Printmaking";
import Ux from "./Pages/UX/UX";
import sun from './img/Sun-DRKGREEN-01.svg';


function App() {

  const [theme, setTheme] = useState("dark");
 
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme("light");
  }

  return (

    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
    <div className="App">
     
    
      <Router>
      <img type='image' src={sun} onClick={() => themeToggler()}  style={{zIndex: '100',width: 'clamp(45px, 2.5vw, 100px)', position:'fixed', right:'2vw', bottom: '2vw' }} /> 
     
     
      
        <Customcursor />
        <Nav />
        <Switch>
        
          <Route path="/Composition" component={Composition} />

          <Route path="/Painting" component={Painting} />

          <Route path="/Dwelling" component={Dwelling} />

          <Route path="/Printmaking" component={Printmaking} />

          <Route path="/Photography" component={Photography} />

          <Route path="/Collages" component={Collages} />

          <Route path="/Graffiti" component={Graffiti} />

          <Route path="/3d" component={ThreeD} />

          <Route path="/Art" component={Art} />

          <Route path="/Design" component={Design} />

          <Route path="/Giga" component={Giga} />

          <Route path="/AccessDirect" component={AccessDirect} />

          <Route path="/Outsource" component={Outsource} />

          <Route path="/GraphicDesign" component={GraphicDesign} />

          <Route path="/Ux" component={Ux} />

          <Route path="/About" component={About} />

          <Route exact path="/MacTavish" component={LandingPage} />

        </Switch>


      </Router>

    </div>
    </ThemeProvider>
  );
}

export default App;
