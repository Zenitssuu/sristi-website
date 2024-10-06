import React from 'react'
import Navbar from './components/Navbar'
import './members.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import phat from '../public/assets/images/pirate hat.png'
import scroll from '../public/assets/images/scroll.png'
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
    tl.from('.heading2,.ph1',{
      opacity:0,
      duration:0.8,x:100,delay:1.5
    })
    tl.from('.ph2',{rotation:45,x:-100,opacity:0,duration:0.5})
    tl.to('.ph2',{rotation:25,delay:0.2})
    tl.to('.ph2',{rotation:10,delay:0.2})
    tl.from('.bigcard', {
      opacity: 0, duration: 1,delay:1,stagger:0.2,scale:0
    },1);
    
    const t2 = gsap.timeline({
      scrollTrigger:{
        trigger:'heading3',
        start: '100% center',
        end:'100% center',
        scrub:false,
        markers:true
      }
    });
    t2.from('.heading3,.ph3',{
      opacity:0,
      duration:0.8,x:100
    })
    t2.from('.ph4',{rotation:45,x:-100,opacity:0,duration:0.5})
    t2.to('.ph4',{rotation:25,delay:0.2})
    t2.to('.ph4',{rotation:10,delay:0.2})
    t2.from('.bigcard2', {
      opacity: 0, duration: 1,delay:1,stagger:0.2,scale:0
    },1)
    
  }, [])
  return (
    <div className='page'>
        <Navbar/>
        <div className="core font-pirata">
          <div className='heading2 font-pirata tracking-wider text-5xl'>
            <div className="ph1"><img src={scroll}></img></div>
            <div className="ph2"><img src={phat} className='iii'></img></div><div className='hh'>TEACHERS TEAM</div></div>
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
        <div className="core font-pirata">
          <div className='heading3 font-pirata tracking-wider text-5xl'>
            <div className='ph3'>
            <img src={scroll}></img></div>
            <div className="ph4"><img src={phat} className='iii'></img></div><div className='hh'>STUDENTS TEAM</div>
        </div>
        <div className="cards">
           {
              members.map((it)=>
                (<div className="bigcard2"><div className="card font-pirata" id={it.name}></div>
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