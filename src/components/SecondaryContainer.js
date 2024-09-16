import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const nowPlayingMovies=useSelector((store)=>store.movies?.nowPlayingMovies);
  const popularMovies=useSelector((store)=>store.movies?.popularMovies);
  if(nowPlayingMovies===null) return;
  if(popularMovies===null) return;
  return (
    <div className='w-screen absolute top-3/4 left-2 z-50'>
     <MovieList title={"Now Playing"} movies={nowPlayingMovies}/> 
     <MovieList title={"Popular"}     movies={popularMovies}/> 
    </div>
  )
}

export default SecondaryContainer;
