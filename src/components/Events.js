import React, { useEffect } from "react";
import styles from "./events.module.css";
import Footer from "./Footer";
import Nav from "./Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import EventCard from "./events/event-card";
import getEvents from "../redux/actions/getEvents";
import { connect } from "react-redux";

function Events(props) {

  useEffect(() => {
    props.getEvents();
  }, []);

  return (
    <div>
      <Nav />
      <Tabs defaultActiveKey="upcoming" id="uncontrolled-tab" className={`${styles["tabs-head"]}`}>
        <Tab eventKey="upcoming" title="Upcoming Events" className={`${styles["tab-body"]} p-4`} tabClassName={`${styles["tab-color"]}`}>
          {props.events && props.events.map((event) => {
            return (<EventCard 
              eventTitle={event.title}
              info1={event.info.speaker}
              info2={event.info.date}
              info3={event.info.timing.from + ' - ' + event.info.timing.to}
              info4={event.info.days}
              eventText={event.description}
              isLive={event.link ? true : false}
              link={event.link}
              cardImg={"http://localhost:5000" + event.imagePath}
            />)
          })}
      </Tab>
        <Tab eventKey="past" title="Past Events" className={`${styles["tab-body"]} p-4`} tabClassName={`${styles["tab-color"]}`}>
        <EventCard
            cardImg="../webinar.jpeg" 
            eventTitle="Foundation of Neural Networks & Modern AI"
            info1="Mr. Alok Govil"
            info2="Oct 22, 2021"
            info3="11:00 AM - 12:30 PM"
            info4="1"
            eventText="A Webinar on Foundation of Neural Networks & Modern AI."
            isLive={false}
          />
          <EventCard 
            cardImg="https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lkZSUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            isLive={false}
            eventTitle="Technological Platforms"
            info1="Mr. ABC XYZ"
            info2="Oct xx, 2021"
            info3="11:00 AM - 12:30 PM"
            info4="1"
            eventText="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <EventCard 
            cardImg="https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lkZSUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            isLive={false}
            eventTitle="TECH-FEST 2020"
            info1={null}
            info2="Nov 20, 2020"
            info3="10:00 AM - 5:00 PM"
            info4="1"
            eventText="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <EventCard
            cardImg="https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lkZSUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            isLive={false} 
            eventTitle="Seminar on XYZ"
            info1="MR. ABCD"
            info2="Month xx, year"
            info3="11:00 AM - 12:30 PM"
            info4="1"
            eventText="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </Tab>
      </Tabs>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { events: state.events }
}

export default connect(mapStateToProps, { getEvents })(Events);
