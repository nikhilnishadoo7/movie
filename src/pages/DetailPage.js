import React from "react";
import { useParams } from "react-router-dom";
import useFatchData from "../Hooks/useFatchData";
import { useSelector } from "react-redux";

const DetailPage = () => {
  const params = useParams()
  const imageURL = useSelector(state=>state.movieData.imageURL)
  const {data} = useFatchData(`/${params?.explore}/${params?.id}`)
  const { data :castData} = useFatchData(`/${params?.explore}/${params?.id}/credits`)
  const Duration = (Number(data?.runtime)/60).toFixed(1).split(".")
  console.log("data", data);
  console.log("starcast", castData);
  return (
    <div>
      <div className="w-full h-full [280px] relative hidden lg:block">
        <div className="w-full h-full">
          <img
            src={imageURL + data?.backdrop_path}
            className="h-full w-full object-cover"
          />
        </div>
        </div>
        <div className="absolute w-full h-full top-0 bg-gradient-to-t ☐ from-neutral-900/90 to-transparent">
        </div>
        <div className="container mx-auto px-3 py-16 1g:py-0 flex flex-col lg:flex-row lg:gap-10 gap-5">
          <div className="relative mx-auto 1g:-mt-28 1g:mx-0 w-fit">
            <img
              src={imageURL + data?.poster_path}
              className="h-80 w-60 object-cover rounded"
            />
          </div>

          <div>
            <h2 className="text-2xl text-white font-bold ">{data?.title || data?.name}</h2>
          <p className="text-neutral-400">
            {data?.tagline}
          </p>
          <div className="flex items-center my-3 gap-3">
            <p>
             Rating : {Number(data?.vote_average).toFixed(1)}
            </p>
            <span>|</span>
            <p>
             View: {Number(data?.vote_count)}
              </p>
              <span>|</span>
              <p>
                Duration : {Duration[0]}h {Duration[1]}m;
              </p>

          </div>
          </div>
          </div>
      
    </div>
  );
};

export default DetailPage;
