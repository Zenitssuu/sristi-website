import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import VideoCarousel from './VideoCarousel'

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const Highlights = () => {
    useGSAP(() => {
        gsap.to('#title', {
            opacity:1,
            y:0,
            ease : "fast",
            delay: 1,
            duration : 1,
        })
        gsap.to('.link', {
            opacity: 1,
            y: 0,
            delay: 1.5,
            duration : 1,
        })
    },[])
  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding  bg-black">
        <div className='screen-max-width'>
            <div className='mb-12 w-full md:flex items-end justify-between'>
                <h1 id='title' className='section-heading'>
                    Highlights
                </h1>
                <div className='flex flex-wrap item-end gap-5'>
                    <a href = "/Events" className='link'>View all events</a>
                </div>
            </div>
            <VideoCarousel/>
        </div>
        

    </section>
  )
}

export default Highlights