import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
   useNowPlayingMovies();
  return (
    <div className='w-screen'>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}
export default Browse;
