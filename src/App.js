import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './compontents/Header';
import Footer from './compontents/Footer';
import MobileNav from './compontents/MobileNav';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setBannerData,setImageURL } from './store/movieSlice';

function App() {

  const dispatch = useDispatch()

  const fetchTreandingData =async()=>{
    try{
      const response =await axios.get('/trending/all/week');
      dispatch(setBannerData(response.data.results))
      // console.log("response",response)
    }
    catch (error){
      console.log("error",error)

    }
  }
  const fatchconfiguration =async()=>{
    try {
      const response =await axios.get('/configuration');
      dispatch(setImageURL(response.data.images.secure_base_url+"original"))
      // console.log("configuration data",response.data.images.secure_base_url+"original")
    } catch (error) {
      console.log("error",error)
    }
  }

  useEffect(()=>{
    fetchTreandingData()
    fatchconfiguration()
  },[])

  return (
   <main className='pb-14 lg:pb-0'>
    <Header/>
  <div className=''>
  <Outlet/>
  </div>
    <Footer/>
    <MobileNav/>
   </main>
  );
}

export default App;


//1:22:42 