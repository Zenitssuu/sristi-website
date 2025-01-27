import React from "react";
import { codeimg, mazeimg, wheelBG} from "../utils";
import EventCard from "./EventCard";
import EventWheel from "./eventWheel";
import '../utils/eventscript.js';
import gsap from "gsap";



const EventsName = () => {
  return (
    <div className=" h-[750px]">
        
            <div className="img-wheel-col">
              <EventWheel />
            </div>
            <EventCard/>
        
    </div>
  );
};

export default EventsName;
