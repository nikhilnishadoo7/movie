import React from 'react' 
import {mobilenavigation} from "../contants/Navigation"
import { NavLink } from 'react-router-dom'

const MobileNav = () => {
  return (
    <section className=' lg:hidden bg-neutral-900 bg-opacity-60 fixed bottom-0 w-full z-40'>
        <div className='flex items-center justify-between h-full text-neutral-400'>
            {
              mobilenavigation.map((nav,index)=>{
                return (
                  <NavLink
                  key ={nav.label+"mobilenavigation"}
                  to = {nav.href}
                  className={({isActive})=>`px-3 flex h-full items-center flex-col justify-center ${isActive && "text-white"}`}
                  >
                    <div className='text-2xl'>
                      {nav.icons}
                    </div>
                    <p className='text-sm'>
                      {nav.label}
                    </p>
                  </NavLink>
                )
              })
            }
        </div>
    </section>
  )
}

export default MobileNav