import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Faculty from "./screens/Faculty";
import Events from "./screens/Events";
import Gallery from "./screens/Gallery";
import Contact from "./screens/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Faculty">
            <Faculty />
          </Route>
          <Route path="/Events">
            <Events />
          </Route>
          <Route path="/Gallery">
            <Gallery />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
