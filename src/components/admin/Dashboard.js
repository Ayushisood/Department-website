import React from "react";
import styles from "./dashboard.module.css";

function Dashboard() {
  return (
    <div className={`${styles["dashboard-container"]}`}>
      <h1>Welcome</h1>
    </div>
  );
}

export default Dashboard;
