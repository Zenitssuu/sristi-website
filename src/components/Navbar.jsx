import React, { useEffect } from 'react'
import { navLists } from '../constants'
import { appleImg, bagImg, searchImg } from '../utils/index.js'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Navbar = () => {

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.header', {
      y: -80,
      opacity: 0, duration: 0.7,
    })
    tl.from('.logo', {
      opacity : 0, duration : 0.5,
    })
    tl.to('.intro-slider', {
      opacity : 1, 
      duration: 0.6,
      stagger: 0.2,
    })
  }, [])


  return (
    <header className='w-full shadow-md shadow-slate-800 sticky header'>
      <nav className='flex w-full bg-black py-2 px-10'>
        <a href='/'><img src={appleImg} alt="apple" className='h-16 logo' /></a>
        <div className='flex flex-1 justify-center max-sm:hidden items-center'>
          {navLists.map((nav, i) => (
            <a key={i}
              className='px-5 text-2xl tracking-wider cursor-pointer
                     text-white hover:text-gray  
                    transition-all font-pirata opacity-0 intro-slider' href={nav[1]}>{nav[0]}</a>
          ))}
        </div>
        {/* <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
              <img className='cursor-pointer'  src={searchImg} alt="events" width={18} height={18}></img>
              <img className='cursor-pointer' src={bagImg} alt="events" width={18} height={18}></img>
            </div> */}
      </nav>
    </header>
  )
}

export default Navbar