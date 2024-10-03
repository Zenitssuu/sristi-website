import React from "react";
import { codeimg, mazeimg, wheelBG} from "../utils";
import EventCard from "./EventCard";
import EventWheel from "./eventWheel";
import '../utils/eventscript.js';
import { EventItem } from "../constants/eventItems.js";
import gsap from "gsap";



const EventsName = () => {
  return (
    <div className=" h-[23000px]">
        
            <div className="img-wheel-col">
              <EventWheel />
            </div>
            <EventCard/>
        
    </div>
  );
};

export default EventsName;
