import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestion from './GPTMovieSuggestion';
import { BACKGROUND_IMAGE } from '../utils/constant';
const GPTSearch = () => {
  return (
    <div>
      <div className='absolute -z-50'>
      <img src={BACKGROUND_IMAGE} className="object-cover scale-110 brightness-50"></img>
      </div>
      <GPTSearchBar/>
      <GPTMovieSuggestion/>
    </div>
  )
}

export default GPTSearch;