import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <form className="form__contents">
        <input
          placeholder="Enter Email"
          type="email"
          required
          className="input__field"
        />
        <button className="input__btn">Submit</button>
        <div className="icons">
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-google"></a>
          <a href="#" className="fa fa-linkedin"></a>
        </div>
        <h3 className="copyright"> &copy; 2021 Department of CS</h3>
      </form>
    </div>
  );
}

export default Footer;
