
import { IoMdHome } from "react-icons/io";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { BiCameraMovie } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";

export const navigator =[
    {
        label :'Tv Show',
        href : 'tv',
        icons:<PiTelevisionSimpleFill/>
    },
    {
        label :'Movie',
        href :'movie',
        icons:<BiCameraMovie/>
    },
   
]
export const mobilenavigation=[
    {
        label:'Home',
        href:'/',
        icons:<IoMdHome/>
    },
    ...navigator,
    {
       label:'Search',
       href:'search',
       icons:  <IoSearchOutline/>
    }
]

export default navigator;