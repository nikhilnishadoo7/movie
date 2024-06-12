import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import usericon from '../assets/user.png'
import { IoSearch } from "react-icons/io5";
import navigator from "../contants/Navigation"

const Header = () => {


    const [searchInput,setsearchInput]= useState("");
    const navigate = useNavigate()

  

    useEffect(()=>{
        if(searchInput){
     navigate(`/search?q=${searchInput}`)}
    },[searchInput])

    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <header className='fixed top-0 w-full h-16 bg-black bg-opacity-75 z-40'>
        <div className='container mx-auto px-3 flex items-center h-full'>
            <Link to={'./'}>
                <img
                src={logo}
                alt='logo'
                width={120}
                />
            </Link>
            <nav className='hiddem lg: flex items-center gap-1 ml-5'>
                {
                    navigator.map((nav,index)=>{
                        return(
                            <div>
                                <NavLink key={nav.label} to={nav.href} className={({isActive})=>'px-3 hover:text-neutral-100'}>
                                    {nav.label}
                                </NavLink>
                            </div>
                        )
                    })
                }
            </nav>
            <div className='ml-auto flex items-center gap-4'>
               <form className='flex items-center gap-2 ' onSubmit={handleSubmit}>
                    < input
                    className=' outline-none bg-transparent px-4 py-1 border-none hidden lg:block'
                     type='text' 
                     placeholder='search'
                     onChange={(e)=>setsearchInput(e.target.value)}
                     value = {searchInput}
                     />

              <button className='text-2xl text-white'>
              <IoSearch/>
              </button>
                    
                </form>
            <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transtion-all'>
                <img
               src={usericon}
               alt='user'
               className='w-full h-full'
               />

            </div>
            </div>

        </div>

    </header>
  )
}

export default Header