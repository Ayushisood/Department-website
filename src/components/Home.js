import React from "react";
import "./Home.css";
import Nav from "./Nav";
import Banner from "./home/Banner";
import Card from "./home/Card";
import Footer from "./Footer";
import Accordion from "react-bootstrap/Accordion";
import Crousel from "./Crousel";
import News from "./News";

function Home() {
  return (
    <div>
      <Nav />
      <Banner />

      <div className="home-bg">
        <div className="accordian-holder">
          <Accordion flush className="accord">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h3 className="accord-header">
                  More about Computer Science Department
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                The Computer Science Department represents the technological
                face of the college. Since its inception around three decades
                ago with B.Sc.(General) course, the department has evolved
                significantly in terms of number of courses offered, student and
                faculty strength. It now offers two undergraduate courses: B.Sc.
                Physical Science(CS) & B.Sc.(Hons) Computer Science. With a
                student strength of about 400, the department offers an
                enthralling opportunity to learn, apply and enhance computer
                science knowledge. Apart from the students enrolled in these
                courses, the department also provides a range of elective
                courses in Computer Science for students as per the new
                syllabus. The backbone of the department are two fully furnished
                air-conditioned computer labs, which have projector facility to
                facilitate smart teaching-learning. Computer systems having
                latest configuration, LAN connection and internet provide the
                students an opportunity to enhance their capabilities by
                practically solving the computer science problems. It leads to
                skill-enhancement in students by enabling them to experiment and
                explore information beyond the boundaries of curriculum.
                Software on all the systems is regularly upgraded to keep up
                with the fast-changing technology. The students of department
                exemplify a unique combination of creativity, technology and
                enthusiasm which is amply demonstrated through the plethora of
                interactive events conducted by the Computer Society “Comest”.
                The students are part of committees which organise events such
                as Alumni talk, Industry Interaction program, Technical Fest,
                Excursion, Seminar, workshop, Cultural Events etc. Students are
                also involved in various IT projects for the college & beyond as
                part of their summer-internship & course related activities. The
                students are prepared by fully committed nine faculty members.
                Apart from regularly mentoring the students, faculty members are
                actively contributing to academia and research activities.
                Research is the forte of department with both the permanent
                faculty members passionately involved in research and
                supervising PhD students under the aegis of Department of
                Computer Science, University of Delhi. The contribution of
                faculty is often in the form of writing books/book chapters,
                research articles in journals and conferences of national and
                international repute. Faculty members have diligently been
                organising and/or attending conferences, workshops, symposia,
                FDPs etc to keep themselves updated with the latest trends and
                technologies in the industry. They have also been associated
                with Research and Innovation projects. Department aims at
                preparing students for sustainability and life-long learning.
                With skill oriented course curriculum department inculcates the
                computational thinking, analytical, and problem solving skills
                in students which prepares them for IT industry and higher
                studies in the area of Computer Science/Applications. The
                department strives to achieve an amalgam of dynamism and
                academic knowledge to help our diverse set of national and
                international students to build their own path towards success
                in life .
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="crousel-holder">
          <Crousel />
        </div>

        <div className="news-holder">
          <h1>Latest News</h1>
          <News />
        </div>

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
