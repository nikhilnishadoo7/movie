import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cards from "../compontents/Cards"

const Explore = () => {
  const params = useParams()
  const [pageNo,setpageNo]= useState(1);
  const [Data,setData]=useState([]);
  const [total,Settotal]= useState(0);
  console.log("params",params.explore)

  const fatchData = async()=>{
    try {
      const response =await axios.get(`/discover/${params.explore}`,{
        params:{
          page :pageNo
        }
      })
      setData((pre)=>{
        return[
          ...pre,
          ...response.data.results
        ]
      })

      Settotal( response.data.total_pages)
      console.log("response",response)
    } catch (error) {
     console.log("error in fatchingdata",error) 
    }
  }

  const handleScroll = ()=>{
    if((window.innerHeight + window.scrollY)>= document.body.offsetHeight ){
      setpageNo(pre =>pre+1)
    }
  }

  useEffect(()=>{
        fatchData()
  },[pageNo,params.explore])


  useEffect(()=>{
         setpageNo(1);
         setData([]);
         fatchData()
  },[params.explore])

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
},[])
  
  return (
    <div className='py-16'>
     <div className='container mx-auto'>
     <h3 className='capitalize text-lg lg:text-xl font-semibold my-3'>Populer {params.explore} Show </h3>
     <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
  {
      Data.map((explore,index)=>{
        return (
          <Cards data ={explore} key={explore.id+"ExploreSection"} media_type={params.explore}/>
        )
      })
     }
  </div>
     </div>
    </div>
  )
}

export default Explore