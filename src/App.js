import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Faculty from "./components/Faculty";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <div style={{ background: "#111" }}>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/faculty">
            <Faculty />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
