import moment from 'moment'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cards = ({data,trending,index}) => {
    const imageURL = useSelector(state=>state.movieData.imageURL)
  return (
    <Link to={"/"+data.media_type+"/"+data.id} className='w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden rounded relative'>
        <img
        src={imageURL+data?.poster_path}
        />

        <div className='absolute top-4'>
            {
                trending && (
                    <div className='py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/60 overflow-hidden'>
                        #{index} Trending
                    </div>
                )
            }
        </div>
        <div className='absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/60 p-2'>
            <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>{data.title || data.name} </h2>
            <div className='text-sm text-neutral-400 flex justify-between items-center'>
                        <p>
                            {moment(data.release_date).format("MMMM Do YYYY")}
                        </p>
                        <p className='bg-black/70 text-neutral-200 rounded-full text-s px-1'>
                           Rating: {Number(data.vote_average).toFixed(1)}
                        </p>
                     </div>
        </div>

    </Link>
  )
}

export default Cards