import React from 'react'
import MovieCard from './MovieCard';
const MovieList = ({title,movies}) => {
  return (
    <div>
    <h3 className='text-gray-100 font-semibold text-2xl mt-3 mb-2'>{title}</h3>
    <div className='flex overflow-x-scroll'>
      <div className='flex gap-2'>
       {movies.length>0?movies.map((movie)=><MovieCard key={movie.id} posterPath={movie.poster_path}/>):""}
      </div>
    </div>
    </div>
  )
}

export default MovieList;
