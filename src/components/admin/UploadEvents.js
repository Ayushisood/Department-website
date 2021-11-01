import React from "react";
import styles from "./uploads.module.css";
import { Link } from "react-router-dom";

function UploadEvents() {
  return (
    <div className={`${styles["upload-container"]}`}>
      <div className={`${styles["uploads"]}`}>
        <Link to="/admin/uploadNewEvent">
          <button className={`${styles["upload-btn"]}`}>Add new event</button>
        </Link>
        <Link to="/admin/updateEvent">
          <button className={`${styles["upload-btn"]}`}>
            Update existing event
          </button>
        </Link>
        <Link to="/admin/deleteEvent">
          <button className={`${styles["upload-btn"]}`}>Delete event</button>
        </Link>
      </div>
    </div>
  );
}

export default UploadEvents;
