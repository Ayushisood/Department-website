import React from "react";
import { Link } from "react-router-dom";
import styles from "./dashboard.module.css";

function Dashboard() {
  return (
    <div className={`${styles["dashboard-container"]}`}>
      <h1>Welcome to Admin Panel</h1>
      <img
        src="https://cdn.dribbble.com/users/1928646/screenshots/5781055/support.gif"
        className={`${styles["dashboard-admin-img"]}`}
      />
      <div className={`${styles["dashboard-contents"]}`}>
        <Link to="/admin/uploadnews">
          <button className={`${styles["dashboard-btn"]}`}>Upload News</button>
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

export default Dashboard;
