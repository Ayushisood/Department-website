import React from "react";
import styles from "./gallery.module.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Placeholder from "react-bootstrap/Placeholder";

function Gallery() {
  return (
    <div>
      <Nav />

      <Placeholder as="p" animation="glow" bg="dark">
        <div class="container-fluid">
          <h2 class="btn-container">Image Gallery</h2>
          <div class="row" style={{ width: " 97.5%", margin: "auto" }}>
            <div class="col-xs-12 col-sm-6 col-md-4 design">
              <img
                src="https://images.unsplash.com/photo-1514473776127-61e2dc1dded3?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80"
                alt="ImageOne"
                width="100%"
              />

              <img
                src="https://www.komando.com/wp-content/uploads/2019/09/Android-mobile-phone.jpg"
                alt="ImageTwo"
                width="100%"
              />

              <img
                src="https://rxoptical.com/wp-content/uploads/Rx-Optical-Blog-Image_Dark-Mode_01.23.20.jpg"
                alt="ImageThree"
                width="100%"
              />

              <img
                src="https://hocotech.com/wp-content/uploads/2018/08/shatterproof-edges-full-screen-hd-glass-a1-iphone-6-6s-plus-on-phone.jpg"
                alt="ImageFour"
                width="100%"
              />
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4 design">
              <img
                src="https://hocotech.com/wp-content/uploads/2018/08/shatterproof-edges-full-screen-hd-glass-a1-iphone-7-8-plus-on-phone-300x300.jpg"
                alt="ImageFive"
                width="100%"
              />

              <img
                src="https://s3.ap-southeast-1.amazonaws.com/cdn.deccanchronicle.com/sites/default/files/iPhone7Concept%20(2)_0.jpg"
                alt="ImageSix"
                width="100%"
              />

              <img
                src="http://9to5mac.com/wp-content/uploads/sites/6/2014/02/iphone-6-dumb-concept.png"
                alt="ImageSeven"
                width="100%"
              />

              <img
                src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/13/11/iphone.jpg?width=982&height=726&auto=webp&quality=75"
                alt="ImageEight"
                width="100%"
              />
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4 design">
              <img
                src="http://9to5mac.com/wp-content/uploads/sites/6/2014/02/iphone-6-dumb-concept.png"
                alt="ImageNine"
                width="100%"
              />

              <img
                src="https://hocotech.com/wp-content/uploads/2018/08/shatterproof-edges-full-screen-hd-glass-a1-iphone-7-8-plus-on-phone-300x300.jpg"
                alt="ImageTen"
                width="100%"
              />

              <img
                src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/13/11/iphone.jpg?width=982&height=726&auto=webp&quality=75"
                alt="ImageEleven"
                width="100%"
              />
            </div>
          </div>
        </div>
      </Placeholder>

      <Footer />
    </div>
  );
}

export default Gallery;
