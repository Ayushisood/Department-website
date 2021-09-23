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
      </form>
    </div>
  );
}

export default Footer;
