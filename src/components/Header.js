import React from 'react';
import logoImage from '../images/Netflix_Logo_PMS.png';
const Header = () => {
  return (
    <div className='absolute top-2 left-36 text-netflixRed'>
      <img src={logoImage} alt="logo" className='w-44'></img>
    </div>
  )
}

export default Header;
