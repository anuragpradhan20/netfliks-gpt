import React from 'react'
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstant';
const GPTSearchBar = () => {
  const langKey=useSelector((store)=>store.config.lang);
  return (
    <div className='w-[40vw] flex gap-2 absolute top-8 left-80 z-50 bg-black px-4 py-2 rounded-md '>
        <input type="text" placeholder={lang[langKey].gptSearchPlaceholder} className='w-4/5 px-6 py-2 rounded-md text-base outline-none hover:outline-1 hover:outline-netflixRed'></input>
        <button className='w-1/5 bg-netflixRed text-white px-3 py-1 rounded-md font-bold text-md'>{lang[langKey].search}</button>
    </div>
  )
}
export default GPTSearchBar;