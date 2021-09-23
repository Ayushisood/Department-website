import React from "react";
import "./Home.css";
import Nav from "./Nav";
import Banner from "./Banner";
import Card from "./Card";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Nav />
      <Banner />

      <div className="home-bg">
        <h1>COURSES OFFERED</h1>
        <h3>Current Areas of Study</h3>
        <div className="home-content">
          <Card
            image="https://static.wixstatic.com/media/ad69a2abe15749a9a62bbfb83c3003c7.jpg/v1/fill/w_825,h_500,fp_0.84_0.35,q_85,usm_0.66_1.00_0.01/ad69a2abe15749a9a62bbfb83c3003c7.webp"
            heading="BSC. (H) COMPUTER SCIENCE"
            text="The Department of Computer Science offers 3-year B.Sc. (Hons.) Computer Science programme through constituent colleges of the University of Delhi. The B.Sc. (Hons.) Computer Science programme primarily intends to serve as an input for higher degree academic programmes in Computer Science ."
          />
          <Card
            image="https://static.wixstatic.com/media/49cf43b85ab5497ea5c3a2e6d0737885.jpg/v1/fill/w_825,h_500,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/49cf43b85ab5497ea5c3a2e6d0737885.webp"
            heading="B.SC PHYSICAL SCIENCE WITH COMPUTER SCIENCE"
            text="B.Sc Computer Science will teach you only and only about computers. The subjects will be different kinds of subjects related to computers, like PHP, Java, Hardware, etc. However, B.Sc physical science has additional subjects which are physics, chemistry, maths, computer science as it's subjects."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
