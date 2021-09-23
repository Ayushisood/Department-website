import React from "react";
import "./Home.css";
import Nav from "./Nav";
import Banner from "./Banner";

function Home() {
  return (
    <div>
      <Nav />
      <Banner />

      <div className="home-content"></div>
    </div>
  );
}

export default Home;
