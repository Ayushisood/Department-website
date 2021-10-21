import React from "react";
import styles from "./comest.module.css";
import Nav from "./Nav";
import Footer from "./Footer";
import HorizontalCard from "./HorizontalCard";

function Comest() {
  return (
    <div>
      <Nav />
      <div className={`${styles["comest-container"]}`}>
        <div className={`container-fluid`}>
          <h2 className={`${styles["comest-header"]}`}>COMEST</h2>
          <h5 className={`${styles["comest-header-1"]}`}>
            The Computer Society of Dyal Singh College (COMEST) aims to knit
            together the technical, academic and socio-cultural dimensions of
            students personality in a holistic manner. Students from all the
            batches of B.Sc.(Hons) CS and B.Sc. Physical Science(CS) students
            work together in teams for organizing various events throughout the
            year which brings in dynamism that is showcased in every event.
          </h5>
          <div className={`row  ${styles["card-style"]}`}>
            <HorizontalCard
              image1="https://static.wixstatic.com/media/nsplsh_312d614132466164796463~mv2_d_5101_3401_s_4_2.jpg/v1/fill/w_575,h_438,al_c,q_80,usm_0.66_1.00_0.01/Image%20by%20NeONBRAND.webp"
              heading1="SEMINAR & EXCURSION"
              text1="The Department of Computer Science offers 3-year B.Sc. (Hons.) Computer Science programme through constituent colleges of the University of Delhi. The B.Sc. (Hons.) Computer Science programme primarily intends to serve as an input for higher degree academic programmes in Computer Science ."
            />

            <HorizontalCard
              image1="https://static.wixstatic.com/media/11062b_e825515c93d94aa1af5b8bdd492155f9~mv2.jpeg/v1/crop/x_0,y_0,w_6209,h_4480/fill/w_575,h_438,al_c,q_80,usm_0.66_1.00_0.01/A%20business%20meeting%20.webp"
              heading1="LECTURE SERIES & EVENT MANAGEMENT"
              text1="The Department of Computer Science offers 3-year B.Sc. (Hons.) Computer Science programme through constituent colleges of the University of Delhi. The B.Sc. (Hons.) Computer Science programme primarily intends to serve as an input for higher degree academic programmes in Computer Science ."
            />

            <HorizontalCard
              image1="https://static.wixstatic.com/media/nsplsh_3c968d5193274a80bc03c4bde13ce91e~mv2.jpg/v1/fill/w_575,h_438,al_c,q_80,usm_0.66_1.00_0.01/Image%20by%20Brett%20Jordan.webp"
              heading1="NEWSLETTER"
              text1="The Department of Computer Science offers 3-year B.Sc. (Hons.) Computer Science programme through constituent colleges of the University of Delhi. The B.Sc. (Hons.) Computer Science programme primarily intends to serve as an input for higher degree academic programmes in Computer Science ."
            />

            <HorizontalCard
              image1="https://static.wixstatic.com/media/4bdf667017a541a388381135bfcea05a.jpg/v1/fill/w_575,h_438,al_c,q_80,usm_0.66_1.00_0.01/Focusing%20at%20Work.webp"
              heading1="TECHNICAL"
              text1="The Department of Computer Science offers 3-year B.Sc. (Hons.) Computer Science programme through constituent colleges of the University of Delhi. The B.Sc. (Hons.) Computer Science programme primarily intends to serve as an input for higher degree academic programmes in Computer Science ."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Comest;
