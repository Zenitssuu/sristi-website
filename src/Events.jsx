import React, { useState } from 'react'
import Navbar from './components/Navbar'
import EventsIntro from './components/EventsIntro'
import EventsName from './components/EventsName'
import './events.css'

const Events = () => {

  const [videoUrl, setVideoUrl] = useState("../public/assets/videos/Ocean.mp4");

  return (
    <div className="bg-black">
      <div className='z-[2]'>
        <Navbar />
      </div>
      <video src={videoUrl} autoPlay muted loop className='absolute'></video>
      <EventsIntro />
      <EventsName />
    </div>
  )
}

export default Events