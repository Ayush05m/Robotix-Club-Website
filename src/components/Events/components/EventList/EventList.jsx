// Event.jsx
import { memo, useRef, useEffect, useState } from "react";
import EventPopUp from "../EventPopUp/EventPopUp";
import './EventList.css'

const EventList = (...eventDetails) => {
  const targetRef = useRef(null);
  const cover = useRef(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopUp = () => {
    setIsPopupOpen(!isPopupOpen);
    const Event = document.querySelector('.Event');
    Event.style.userSelect = 'none';
  };

  const [pseudoElement, setPseudoElement] = useState({
    backgroundSize: "cover",
    backgroundImage: `url(${eventDetails[0].img})`,
    // transform: "scaleX(-1)"
    scaleX: "-1"
  });

  useEffect(() => {
    const eventCover = document.querySelectorAll('.eventCover');
    for (let i = 0; i < eventCover.length; i++) {
      if (i % 2 != 0) {
        eventCover[i].classList.add("eventCoverReverse");
      }
    }
    // console.log(eventCover.);
  }, []);

  useEffect(() => {
    const eventImage = document.querySelectorAll(".eventIn");
    for (let i = 0; i < eventImage.length; i++){
      eventImage[i].style.height = eventImage[i].offsetWidth - 50 + "px";
      console.log(eventImage.offsetHeight);
    }
  }, []);

  return (
    <>
      <div className="eventCard" ref={targetRef} onClick={togglePopUp}>

        <div className="eventCover" >
          <div className="innerBox">
            <h1>{eventDetails[0].title}</h1>
            <p>Date: {eventDetails[0].date}</p>

          </div>
          <div className="gapper"></div>
          <div className="image">
            <div className="rotatory">
              <div className="eventIn" style={pseudoElement}>
                <p>Venue: {eventDetails[0].venue}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="breaker"></div>
      </div>
      {isPopupOpen && (<EventPopUp onClose={togglePopUp} {...eventDetails} />)}
    </>
  );
};

export default memo(EventList);
