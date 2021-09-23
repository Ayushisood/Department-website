import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, showState] = useState(false); // show is variable and its initial value is false, function showState will manipulate the state of show variable

  const history = useHistory();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      showState(true);
    } else {
      showState(false);
    }
  };

  useEffect(
    () =>
      //callback function having side-effect
      {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar); // this is a cleanup function to clean the previous side-effect
      },
    [] // empty dependency array so that side-effect run once after initial rendering
  );

  return (
    // {`nav ${show && "nav__black"}`} , it means only show navbar_black when show variable is true
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("./")} //when clicks, render the homepage
          className="nav__logo"
          src="../logo.png"
          alt="college-logo"
        ></img>
        <div className="nav__list">
          <Link className="nav__list_item" to="/">
            <h2>Home</h2>
          </Link>
          <Link className="nav__list_item" to="/faculty">
            <h2>Faculty</h2>
          </Link>
          <Link className="nav__list_item" to="/events">
            <h2>Events</h2>
          </Link>
          <Link className="nav__list_item" to="/gallery">
            <h2>Gallery</h2>
          </Link>
          <Link className="nav__list_item" to="/contact">
            <h2>Contact</h2>
          </Link>
        </div>

        <img
          onClick={() => history.push("./profile")} //for rendering profile page using router and programatically push the page into history stack
          className="nav__avatar"
          src="../avatar.png"
          // src="https://cahsi.utep.edu/wp-content/uploads/kisspng-computer-icons-user-clip-art-user-5abf13db5624e4.1771742215224718993529.png"
          alt="avatar-logo"
        ></img>
      </div>
    </div>
  );
}

export default Nav;
