import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Faculty from "./components/Faculty";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Comest from "./components/Comest";
import SignUp from "./components/admin/SignUp";
import SignIn from "./components/admin/SignIn";
import Dashboard from "./components/admin/Dashboard";

function App() {
  return (
    <div style={{ background: "rgba(247, 242, 242, 0.795)" }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/faculty">
            <Faculty />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/comest">
            <Comest />
          </Route>
          <Route exact path="/admin/signup">
            <SignUp />
          </Route>
          <Route exact path="/admin/signin">
            <SignIn />
          </Route>
          <Route exact path="/admin/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
