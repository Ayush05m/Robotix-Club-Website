import { memo, useRef, useEffect, useState } from "react";
import './EventPopUp.css'
// import './PopUp.css'

const EventPopUp = ({ ...eventDetails }) => {
    // console.log(ev
    const [pseudoElement, setPseudoElement] = useState({
        backgroundSize: "cover",
        backgroundImage: `url(${eventDetails[0].img})`,
        scaleX: "-1"
    });
    return (
        <div className="event-popup">
            <div onClick={eventDetails.onClose} className="close-popup-btn" >
                <div>
                    <span className="close-btn-span" id="close1"></span>
                    <span className="close-btn-span" id="close2"></span>
                </div>
            </div>
            <div className="scrollable">
                <div className="popup-header">
                    <h1>{eventDetails[0].title}</h1>
                    <p id="popup-date">Date: {eventDetails[0].date}</p>
                </div>
                <div className="popup-content">
                    {eventDetails[0].rules ?
                        <div className="popup-details">
                            <div className="details">
                                <div className="rules">
                                    <ul>
                                        <li>Rules:</li>
                                        {eventDetails[0].rules && eventDetails[0].rules.map((rule, index) => (
                                            <li key={rule}>{index + 1}. {rule} </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div> : ""
                    }
                </div>
                <div className="popupFoot">
                    <div className="register">
                        {eventDetails[0].link ?
                            <a href={eventDetails[0].link} target="blank"><button className="registerBtn popupBtn " role="button"> Register</button></a>
                            : ""
                        }
                        {eventDetails[0].link2 ?
                            <a href={eventDetails[0].link} target="blank"><button className="StatementBtn popupBtn " role="button"> Statement</button></a>
                            : ""
                        }
                    </div>
                    {eventDetails[0].description ?
                        <div className="popup-desc">
                            <h1>Description:-</h1>
                            <p id="popup-description"> {eventDetails[0].description}</p>
                        </div> : ""
                    }
                    
                </div>
            </div>
        </div>

        // <div className="overlay">
        //     {/* Background with semi-transparency */}
        //     <div className="overlay-background"></div>

        //     {/* Content container */}
        //     <div className="overlay-content">
        //         {/* Image */}
        //         <img src={eventDetails[0].img} alt={eventDetails[0].description} />

        //         {/* Description */}
        //         <h2>{eventDetails[0].description}</h2>

        //         {/* Buttons */}
        //         <div className="overlay-buttons">
        //             <a href={eventDetails[0].link} className="button">
        //                 Register
        //             </a>
        //             <a href={eventDetails[0].link2} className="button">
        //                 Statement
        //             </a>
        //         </div>

        //         {/* Rules List */}
        //         <h3>Rules</h3>
        //         <ul className="rules-list">
        //             {eventDetails[0].rules.map((rule) => (
        //                 <li key={rule}>{eventDetails[0].rule}</li>
        //             ))}
        //         </ul>
        //     </div>
        // </div>
    );
}


export default EventPopUp;
