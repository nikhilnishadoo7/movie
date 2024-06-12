import React from 'react'
import { useSelector } from 'react-redux'

const BannerHome = () => {

    const bannerData = useSelector(state=>state.movieData.bannerData);
    const imageURL = useSelector(state=>state.movieData.imageURL)
    console.log(bannerData)

  return (
    <section className='w-full h-full'>
   <div className='flex min-h-full max-h-[95vh] overflow-hidden'>
    {
      bannerData.map((data,index)=>{
        return(
          <div className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative '>
            <div className='w-full h-full'>
            <img
            src={imageURL+data.backdrop_path}
            className='h-full w-full object-cover'
            />
            </div>

            <div className='absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'>
            </div>

            <div className='container  mx-auto '>
            <div className=' absolute w-full bottom-0 max-w-md px-3'>
              <h2 className='font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl'>{data.title}{data.name}</h2>
              <p className='text-ellipsis line-clamp-3 my-2'>{data.overview}</p>
              <div className='flex items-center gap-4'>
                <p>
                  Rating:{(data.vote_average).toFixed(1)}+
                </p>
                <span>|</span>
                <p>
                  View:{(data.popularity).toFixed(0)}
                </p>
              </div>
              <button className='bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-100'>
                  PLAY NOW
                </button>
            </div>
            </div>
           
          </div>
        )
      })
    }
   </div>

    </section>
  )
}

export default BannerHome


//1:45:46