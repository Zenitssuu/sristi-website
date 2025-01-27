import React from "react";
// import { TweenMax, Power3, Power4 } from "gsap";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";
import { EventItem1, EventItem2 } from "../constants/eventItems";

import { useState } from "react";

const EventCard = () => {
  const [clickedButton, setClickedButton] = useState(0);
  
  return (
    <div>
      <div className="flex w-full h-[150px]  items-center justify-center gap-60">
        <button
          className="shadow-btn"
          onClick={() => {
            setClickedButton(1);
          }}
        >
          Event 1
        </button>
        <button
          className="shadow-btn-2"
          onClick={() => {
            setClickedButton(2);
          }}
        >
          Event 2
        </button>
      </div>
      <div className="card-list text-white">
        {clickedButton === 1 ? (
          <>
            {EventItem1.map((item) => (
              <div className="event-card">
                <div className="card-item" key={item.id}>
                  {/*illustrated icon */}
                </div>
                <div>
                  <div className="card-name">{item.name}</div>
                  <div className="card-description">{item.description}</div>
                </div>
              </div>
            ))}
          </>
        ) :  ( clickedButton===2?
          <>
            {EventItem2.map((item) => (
              <div className="event-card bg-blue">
                <div className="card-item" key={item.id}>
                  {/*illustrated icon */}
                </div>
                <div>
                  <div className="card-name">{item.name}</div>
                  <div className="card-description">{item.description}</div>
                </div>
              </div>
            ))}
          </>:<></>
        )}
      </div>
    </div>
  );
};

export default EventCard;
