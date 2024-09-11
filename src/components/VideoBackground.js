import React from "react";
import useMovieVideo from "../hooks/useMovieVideo";
import { useSelector } from "react-redux";
const VideoBackground = ({ id }) => {
  useMovieVideo(id);
  const trailerVideo=useSelector((store)=>store.movies?.trailerVideos);
  if(trailerVideo===null) return;
  return (
    <div className="w-screen absolute top-0 z-10">
      <iframe
        className="w-screen aspect-video brightness-50 z-10" 
        src={`https://www.youtube.com/embed/hXzcyx9V0xw?si=${trailerVideo.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       ></iframe>
    </div>
  );
};

export default VideoBackground;
