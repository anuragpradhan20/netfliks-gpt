import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import GPTSearch from './GPTSearch';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
   useNowPlayingMovies();
   usePopularMovies();
   const gptSelector=useSelector((store)=>store.gpt?.showGPtSerach);
  return (
    <div>
      <Header/>
      {gptSelector?(
        <GPTSearch/>
      ):
      (
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </>
      )}
      
    </div>
  )
}
export default Browse;
