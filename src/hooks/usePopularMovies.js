import React, { useEffect } from 'react'

import { addPopularMovies } from '../utils/moviesSlice';
import { API_OPTIONS, POPULAR_MOVIES_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
const usePopularMovies = () => {
    const dispatch=useDispatch();
  const getPolpularMovies=async ()=>{
   const data=await fetch(POPULAR_MOVIES_URL,API_OPTIONS);
    const jsonData=await data.json();
    dispatch(addPopularMovies(jsonData.results));
  }
  useEffect(()=>{
   getPolpularMovies();
  },[])
}

export default usePopularMovies;