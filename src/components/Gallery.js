import React from "react";
import styles from "./gallery.module.css";
import Nav from "./Nav";
import Footer from "./Footer";
//import Placeholder from "react-bootstrap/Placeholder";

function Gallery() {
  return (
    <div>
      <Nav />

      <div className={`${styles["container-size"]}`}>
        <div className={`container-fluid`}>
          <h2 class={`${styles["heading-style"]}`}>Gallery</h2>
          <div class="row" style={{ width: " 97.5%", margin: "auto" }}>
            <div class="col-xs-12 col-sm-6 col-md-4 ">
              <img
                className={`${styles["img-style"]}`}
                src="https://www.dsc.du.ac.in/wp-content/uploads/2022/08/IMG-20220808-WA00131.jpg"
                alt="ImageOne"
                width="100%"
              />

              <img
                className={`${styles["img-style"]}`}
                src="https://www.dsc.du.ac.in/wp-content/uploads/2022/08/IMG-20220808-WA0014.jpg"
                alt="ImageTwo"
                width="100%"
              />

              <img
                className={`${styles["img-style"]}`}
                src="https://www.dsc.du.ac.in/wp-content/uploads/2022/08/IMG-20220808-WA0031.jpg"
                alt="ImageThree"
                width="100%"
              />

              <img
                className={`${styles["img-style"]}`}
                src="https://www.dsc.du.ac.in/wp-content/uploads/2022/08/IMG-20220808-WA0037.jpg"
                alt="ImageFour"
                width="100%"
              />
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4 ">
              <img
                className={`${styles["img-style"]}`}
                src="https://www.dsc.du.ac.in/wp-content/uploads/2022/08/IMG-20220808-WA00681.jpg"
                alt="ImageFive"
                width="100%"
              />

              <img
                className={`${styles["img-style"]}`}
                src="https://www.dsc.du.ac.in/wp-content/uploads/2022/08/IMG-20220808-WA0065.jpg"
                alt="ImageSix"
                width="100%"
              />

              <img
                className={`${styles["img-style"]}`}
                src="https://www.dsc.du.ac.in/wp-content/uploads/2022/08/IMG-20220429-WA0001.jpg"
                alt="ImageSeven"
                width="100%"
              />

              <img
                className={`${styles["img-style"]}`}
                src="https://www.dsc.du.ac.in/wp-content/uploads/2022/08/IMG-20220410-WA0027.jpg"
                alt="ImageEight"
                width="100%"
              />
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4 ">
              <img
                className={`${styles["img-style"]}`}
                src="https://www.dsc.du.ac.in/wp-content/uploads/2022/08/IMG-20220410-WA0028.jpg"
                alt="ImageNine"
                width="100%"
              />

              <img
                className={`${styles["img-style"]}`}
                src="https://www.dsc.du.ac.in/wp-content/uploads/2022/08/IMG-20220410-WA0029.jpg"
                alt="ImageTen"
                width="100%"
              />

              <img
                className={`${styles["img-style"]}`}
                src="https://www.dsc.du.ac.in/wp-content/uploads/2023/03/0P4A3754-scaled.jpg"
                alt="ImageEleven"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Gallery;
