import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen absolute left-12 top-48 z-50'>
      <h1 className='text-3xl font-semibold text-gray-100 mb-2'>{title}</h1>
      <p className='text-xs font-semibold text-gray-100 text-justify w-1/3 mb-3'>{overview}</p>
      <div className='flex gap-2'>
        <button className='bg-white text-black px-6 h-7 py-2 flex items-center gap-1 rounded-sm text-sm font-semibold'><FaPlay/>Play</button>
        <button className='bg-gray-600 text-white px-3 h-7 py-2 flex items-center gap-1 rounded-sm text-sm font-semibold'><IoMdInformationCircleOutline/>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;
