import React from "react";
import { Link } from "react-router-dom";
import styles from "./dashboard.module.css";
import validateLogOut from "../../redux/actions/validateLogOut";
import { connect } from "react-redux";

function Dashboard(props) {
  function handleLogOut(event) {
    event.preventDefault();
    props.validateLogOut(
      event.target.username.value,
      event.target.password.value
    );
  }

  if (props.success) {
    return <Redirect to="/admin/signin" />;
  } else {
    return (
      <div className={`${styles["dashboard-container"]}`}>
        <h1 className={`${styles["dashboard-heading"]}`}>
          Welcome to Admin Panel
        </h1>
        <button
          className={`${styles["logOut-btn"]}`}
          onClick={(event) => handleLogOut(event)}
        >
          Log out
        </button>
        <img
          src="https://cdn.dribbble.com/users/1928646/screenshots/5781055/support.gif"
          className={`${styles["dashboard-admin-img"]}`}
        />
        <div className={`${styles["dashboard-contents"]}`}>
          <Link to="/admin/uploadnews">
            <button className={`${styles["dashboard-btn"]}`}>
              Upload News
            </button>
          </Link>
          <Link to="/admin/uploadevents">
            <button className={`${styles["dashboard-btn"]}`}>
              Upload Events
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { success: state.success };
};

export default connect(mapStateToProps, { validateLogOut })(Dashboard);
