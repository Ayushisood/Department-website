import React from "react";
import styles from "./uploads.module.css";
import { Link } from "react-router-dom";

function UploadNews() {
  return (
    <div className={`${styles["upload-container"]}`}>
      <div className={`${styles["uploads"]}`}>
        <Link to="/admin/addNews">
          <button className={`${styles["upload-btn"]}`}>Add news</button>
        </Link>
        <Link to="/admin/deleteNews">
          <button className={`${styles["upload-btn"]}`}>Delete news</button>
        </Link>
      </div>
    </div>
  );
}

export default UploadNews;
