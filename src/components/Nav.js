import React from "react";
import { useHistory, Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const history = useHistory();

  return (
    <div className="nav">
      <div className="nav__contents">
        <img
          onClick={() => history.push("./")} //when clicks, render the homepage
          className="nav__logo"
          src="../logo.png"
          alt="college-logo"
        ></img>
        <div className="nav__list">
          <Link className="nav__list_item" to="/">
            <h3>Home</h3>
          </Link>
          <Link className="nav__list_item" to="/faculty">
            <h3>Faculty</h3>
          </Link>
          <Link className="nav__list_item" to="/events">
            <h3>Events</h3>
          </Link>
          <Link className="nav__list_item" to="/gallery">
            <h3>Gallery</h3>
          </Link>
          <Link className="nav__list_item" to="/contact">
            <h3>Contact</h3>
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
