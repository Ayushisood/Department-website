import React from "react";
import styles from "./events.module.css";
import Footer from "./Footer";
import Nav from "./Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import EventCard from "./events/event-card";

function Events() {
  return (
    <div>
      <Nav />
      <Tabs defaultActiveKey="upcoming" id="uncontrolled-tab" className={`${styles["tabs-head"]} mb-3`}>
        <Tab eventKey="upcoming" title="Upcoming Events" className="m-4">
          <EventCard 
            eventTitle="Foundation of Neural Networks & Modern AI"
            info1="Mr. Alok Govil"
            info2="Oct 22, 2021"
            info3="11:00 AM - 12:30 PM"
            eventText="A Webinar on Foundation of Neural Networks & Modern AI."
            isLive={true}
            link="https://meet.google.com/buq-mdus-nii?hs=224"
          />
          <EventCard 
            eventTitle="Event 2"
            info1="jhdsjfb"
            info2="hgtsuifn"
            info3="jhilsjduyhuj"
            eventText="Some quick example text to build on the card title and make up the bulk of the card's content."
            isLive={true}
          />
        </Tab>
        <Tab eventKey="past" title="Past Events" className="m-4">
          <EventCard 
            isLive={false}
            eventTitle="Event 3"
            info1="jhdsjfb"
            info2="hgtsuifn"
            info3="jhilsjduyhuj"
            eventText="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <EventCard 
            isLive={false}
            eventTitle="Event 4"
            info1="jhdsjfb"
            info2="hgtsuifn"
            info3="jhilsjduyhuj"
            eventText="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <EventCard
            isLive={false} 
            eventTitle="Event 5"
            info1="jhdsjfb"
            info2="hgtsuifn"
            info3="jhilsjduyhuj"
            eventText="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </Tab>
      </Tabs>
      <Footer />
    </div>
  );
}

export default Events;
