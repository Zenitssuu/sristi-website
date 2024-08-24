import React from 'react'
import { navLists } from '../constants'
import { appleImg, bagImg, searchImg } from '../utils/index.js'
const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
        <nav className='flex w-full screen-max-width'>
            <img src={appleImg} alt="apple" height={18} width={14}/>
            <div className='flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((nav,i) => (
                    <div key={i} className='px-5 text-sm cursor-pointer text-white hover:text-gray  transition-all font-pirata'>{nav}</div>
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