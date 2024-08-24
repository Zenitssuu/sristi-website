import React, { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {heroVideo, smallHeroVideo} from "../utils"

const Intro = () => {
  const [videoSrc, setVideoSrc] =  useState(heroVideo)
  useGSAP(() =>{
    var tl = gsap.timeline();

    gsap.to('#heading',{
      y : -10,
      opacity:1,
      delay : 2,
      duration : 0.8,
    })
    gsap.to('#intro',{
      ease : "fast",
      scale : 1,
      opacity:1,
      delay: 1,
      duration : 2,
    })
  },[])


  return (
    <section className='h-full w-full'>
      <div className='h-full w-full flex flex-col justify-center items-center gap-5 p-10'>
        <p id="heading" className='intro-title font-pirata tracking-wider text-5xl opacity-0'>SRISTI 2K24</p>
        <div className='sm:w-5/12 md:w-8/12 w-10/12 flex justify-center overflow-hidden'>
          <video id='intro' className='intro-title w-full bg-center scale-0' loop autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4"/>
          </video>
        </div>
      </div>
    </section>
  )
}

export default Intro