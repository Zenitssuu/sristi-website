import React, { useRef } from "react";
import { compassBG } from "../utils";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import EventsName from "./EventsName";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const EventsIntro = () => {
  const bg1 = useRef(null);
  const imgcontainer=useRef(null);
  const img=useRef(null);
  const text1=useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: bg1.current,
        pin: bg1.current,
        pinSpacing: false,
        start: "top top",
        endTrigger: ".last",
        end: "bottom bottom",
      });
      gsap
      .timeline({
        scrollTrigger:{
            trigger:imgcontainer.current,
            pin: imgcontainer.current,
            scrub:1,
            start: "0% 0%",
        }
      })
      .to(img.current, {transform:"translateZ(2200px)"})
      .to(text1.current, {y:-800}, "<");
    });
    
    return () => ctx.revert();
  }, []);
  
  return (
    <div className="relative">
      <div
        ref={bg1}
        className="bg bg-[#141414] absolute h-screen w-screen z-[-1]"
      ></div>
      <section >
        <div  ref={imgcontainer} className="img-container perspective flex items-center justify-center h-screen w-screen">
          <img  ref={img} className="img h-[500px] -mt-20" src={compassBG} alt="" />
          <div className="absolute flex flex-col items-center justify center">
            <h1 ref={text1} className="text-[120px] font-pirata -mt-20">
              <span className="text-stroke">Let the Loot</span> Begin!
            </h1>
          </div>
        </div>
        <div className="last">
          <EventsName/>
        </div>
      </section>
    </div>
  );
};

export default EventsIntro;
