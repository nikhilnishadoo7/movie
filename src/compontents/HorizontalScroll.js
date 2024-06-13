import React, { useRef } from 'react'
import Cards from './Cards'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const HorizontalScroll = ({data=[],heading,trending,media_type}) => {
 const containerRef =useRef()
 const HandleNext=()=>{
    containerRef.current.scrollLeft += 300
 }
 const Handlepre=()=>{
    containerRef.current.scrollLeft -= 300
 }
    return (
    <div className='container mx-auto px-3 my-10'>
    <h2 className='text-xl lg:text-2xl font-bold mb-2 text-white capitalize '>{heading}</h2>
    <div className='relative'>

    <div ref={containerRef} className='grid grid-cols-[repeat(auto-fit,230px)] gap-7 grid-flow-col overflow-x-scroll overflow-hidden z-10  relative scroll-smooth transition-all scrolbar-none'>
{
    data.map((data,index)=>{
      return(
        <Cards key={data.id} data={data} index={index+1} trending={trending} media_type={media_type}/>
      )
    })
  }
</div>
<div className='absolute top-0 hidden lg:flex justify-between w-full h-full items-center'>
 <button onClick={Handlepre} className='bg-white p-1 text-black rounded-full -mr-2 z-10'>
    <IoIosArrowBack/>
 </button>
 <button onClick={HandleNext} className='bg-white p-1 text-black rounded-full -mr-2 z-10'>
    <IoIosArrowForward/>
 </button>
</div>
  </div>
    </div>

  )
}

export default HorizontalScroll