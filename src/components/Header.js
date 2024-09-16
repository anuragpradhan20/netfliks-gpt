import React from 'react';
import { FaUser } from "react-icons/fa";
import logoImage from '../images/Netflix_Logo_PMS.png';
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGE } from '../utils/constant';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
const navigate=useNavigate();
const dispatch=useDispatch();
const user=useSelector((store)=>store.user);
const gptSearch=useSelector((store)=>store.gpt.showGPtSerach);
const handelLanguageChange=(e)=>{
  dispatch(changeLanguage(e.target.value));
}
const handelGPTSeach=()=>{
  dispatch(toggleGptSearchView());
}
const handelSignout=()=>{
signOut(auth).then(() =>{
}).catch((error) => {
  navigate("/error");
});
}
useEffect(()=>{
 const unscribe=onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName}));
      navigate("/browse")
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  });
  return ()=>unscribe;
  },[])
  return (
    <div className='w-[86vw] absolute top-3 left-36 flex justify-between items-center p-2  text-netflixRed z-50'>
      <img src={logoImage} alt="logo" className='w-44 text-netflixRed'></img>
      <div>
        {
          user && 
          <div className='flex gap-2 justify-center items-center'>
            {
              gptSearch &&
             (<select className='px-2 py-1 outline-none border border-white rounded-md bg-white font-semibold text-sm  hover:border-netflixRed' onChange={handelLanguageChange}>
              {
                 SUPPORTED_LANGUAGE.map((lan)=>(<option value={lan.identifier}>{lan.name}</option>))
              }
             </select>)
            }
             <button onClick={handelGPTSeach} className='bg-white text-netflixRed px-2 py-1 text-sm font-semibold rounded-md'>{gptSearch?"Home":"GPT Search"}</button>
             <button onClick={handelSignout}  className='text-white bg-netflixRed px-2 py-1 rounded-md text-sm font-semibold'>Sign out</button>
             <span className='flex gap-1 justify-center items-center text-white text-sm'><FaUser/>{user.displayName}</span>
          </div> 
        }
        
       </div>    
    </div>
  )
}

export default Header;
