import React from "react";
import { useHistory, Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const history = useHistory();

  return (
    <div className="nav__container">
      <div className="nav__contents">
        <img
          onClick={() => history.push("./")} //when clicks, render the homepage
          className="nav__logo"
          src="../logo.png"
          alt="college-logo"
        ></img>
        <div className="nav__list">
          <Link className="nav__list_item" to="/">
            <h4>Home</h4>
          </Link>
          <Link className="nav__list_item" to="/faculty">
            <h4>Faculty</h4>
          </Link>
          <Link className="nav__list_item" to="/events">
            <h4>Events</h4>
          </Link>
          <Link className="nav__list_item" to="/gallery">
            <h4>Gallery</h4>
          </Link>
          <Link className="nav__list_item" to="/contact">
            <h4>Contact</h4>
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
