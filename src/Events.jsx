import React from 'react'
import Navbar from './components/Navbar'
import EventsIntro from './components/EventsIntro'
import EventsName from './components/EventsName'
import './events.css'

const Events = () => {
  


  return (
    <div className="bg-black">
      <div className='z-[2]'>
        <Navbar/>
      </div>
        
        <EventsIntro/>
        <EventsName/>
    </div>
  )
}

export default Events