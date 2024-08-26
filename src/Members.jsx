import React from 'react'
import Navbar from './components/Navbar'
import './members.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import phat from '../public/assets/images/pirate hat.png'
const members=[
  {
    name:"MEHEDI"
  },
  {
    name :"AYUSH"
  },
  {
    name:"Srinjay"
  },
  {
    name:"Sampurno"
  },
  {
    name:"shree"
  },
  {
    name:"faizan"
  },
  {
    name:"Soumyabrata"
  }

]
const Members = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.heading',{
      opacity:0,
      duration:0.8,x:100,delay:1.5
    })
    tl.from('.ph',{rotation:45,x:-100,opacity:0,duration:0.5})
    tl.from('.bigcard', {
      opacity: 0, duration: 1,delay:1,stagger:0.2,scale:0
    },1)
    
  }, [])
  return (
    <div className='page'>
        <Navbar/>
        <div className="core font-pirata">
          <div className='heading font-pirata tracking-wider text-5xl'>
            <div className="ph"><img src={phat} className='iii'></img></div>THE CORE TEAM</div>
          <hr></hr>
        <div className="cards">
           {
              members.map((it)=>
                (<div className="bigcard"><div className="card font-pirata" id={it.name}></div>
                {it.name}
                </div>)
              )
           }          
        </div>
        </div>
    </div>
  )
}

export default Members