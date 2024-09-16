import React from 'react'
import { MOVIE_IMG_CDN_URL } from '../utils/constant';

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48'>
      <img alt="movie img"  src={MOVIE_IMG_CDN_URL+posterPath} />
    </div>
  )
}

export default MovieCard;
