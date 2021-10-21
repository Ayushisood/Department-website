import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={`${styles["footer"]}`}>
      <form className={`${styles["form__contents"]}`}>
        <input
          placeholder="Enter Email"
          type="email"
          required
          className={`${styles["input__field"]}`}
        />
        <button className={`${styles["input__btn"]}`}>Submit</button>
        <div className={`${styles["icons"]}`}>
          <a
            href="#"
            className={`fa fa-facebook ${styles["social"]} ${styles["social-facebook"]}`}
          ></a>
          <a
            href="#"
            className={`fa fa-twitter ${styles["social"]} ${styles["social-twitter"]}`}
          ></a>
          <a
            href="#"
            className={`fa fa-google ${styles["social"]} ${styles["social-google"]}`}
          ></a>
          <a
            href="#"
            className={`fa fa-linkedin ${styles["social"]} ${styles["social-linkedin"]}`}
          ></a>
        </div>
        <p className={`${styles["copyright"]}`}>&copy; 2021 Department of CS</p>
      </form>
    </div>
  );
}

export default Footer;
