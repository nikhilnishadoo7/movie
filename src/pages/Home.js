import React, { useEffect, useState } from 'react'
import BannerData from '../compontents/BannerHome'
import Cards from '../compontents/Cards';
import { useSelector } from 'react-redux';
import HorizontalScroll from '../compontents/HorizontalScroll';
import axios from 'axios';
import useFatch from '../Hooks/useFatch';

const Home = () => {
  const trendingData = useSelector(state=>state.movieData.bannerData);
  const {data:nowplaying} =useFatch('/movie/now_playing');
  const {data: TopRated} =useFatch('/movie/top_rated');
  const {data: popularShowData} =useFatch('/tv/popular');
  const {data: OnTheAir} =useFatch('/tv/on_the_air')
  return (
    <div>
      <BannerData/>

  <HorizontalScroll data={trendingData} heading={"Trending"} trending={true}/>
  <HorizontalScroll data={nowplaying} heading={"Now Play"} media_type={"movie"}/>
  <HorizontalScroll data={TopRated} heading={"Top Rated"} media_type={"movie"}/>
  <HorizontalScroll data={popularShowData} heading={"Popular Tv Show"} media_type={"tv"}/>
  <HorizontalScroll data={OnTheAir} heading={"On The Air"} media_type={"tv"}/>
      </div>
  )
}

export default Home