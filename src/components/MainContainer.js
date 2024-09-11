import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return;
    const maninMovie=movies[0];
    const{original_title,overview,id}=maninMovie;
  return (
    <div>
      <VideoBackground id={id}/>
      <VideoTitle title={original_title} overview={overview}/>
    </div>
  )
}

export default MainContainer;
