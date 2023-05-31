import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={`${styles["footer"]}`}>
      <form className={`${styles["form__contents"]}`}>
        {/* <input
          placeholder="Enter Email"
          type="email"
          required
          className={`${styles["input__field"]}`}
        />
        <button className={`${styles["input__btn"]}`}>Submit</button> */}
        <h3 className={`${styles["contact"]}`}>
          Contact : <a href="http://dsc.du.ac.in/">Click here</a>
        </h3>
        <div className={`${styles["icons"]}`}>
          <a
            href="https://www.facebook.com"
            className={`fa fa-facebook ${styles["social"]} ${styles["social-facebook"]}`}
          ></a>
          <a
            href="https://www.twitter.com"
            className={`fa fa-twitter ${styles["social"]} ${styles["social-twitter"]}`}
          ></a>
          <a
            href="https://www.google.com"
            className={`fa fa-google ${styles["social"]} ${styles["social-google"]}`}
          ></a>
          <a
            href="https://www.linkedin.com"
            className={`fa fa-linkedin ${styles["social"]} ${styles["social-linkedin"]}`}
          ></a>
        </div>
        <p className={`${styles["copyright"]}`}>&copy; 2021 Department of CS</p>
      </form>
    </div>
  );
}

export default Footer;
