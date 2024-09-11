import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { useEffect } from 'react';
import { addTrailerVideos } from '../utils/moviesSlice';
const useMovieVideo = (id) => {
        const dispatch=useDispatch();
        const getMovieVideo=async ()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,API_OPTIONS)
        const jsonData=await data.json();
        const movieVideo=jsonData.results;
        const filterData = movieVideo.filter((video) => video.type === "Trailer");
        const trailerVideo = filterData.length ? filterData[0] : movieVideo[0];
        dispatch(addTrailerVideos(trailerVideo));
    }
    useEffect(()=>{
        getMovieVideo();
      },[])
}

export default useMovieVideo;
