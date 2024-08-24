import React, { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {heroVideo, smallHeroVideo} from "../utils"

const Intro = () => {
  const [videoSrc, setVideoSrc] =  useState(window.innerWidth<760? smallHeroVideo:heroVideo)
  useGSAP(() =>{
    gsap.to('#intro',{
      opacity:1,
      delay: 1.5,
    })
  },[])


  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p id="intro" className='intro-title font-pirata'>SRISTI 2K24</p>
        <div className='md:w-10/12 w-9/12'>
          <video id='intro' className='intro-title' loop autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4"/>
          </video>
        </div>
      </div>
    </section>
  )
}

export default Intro