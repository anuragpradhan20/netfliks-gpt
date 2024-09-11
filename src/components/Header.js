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
const Header = () => {
const navigate=useNavigate();
const dispatch=useDispatch();
const user=useSelector((store)=>store.user);
const handelSignout=()=>{
signOut(auth).then(() =>{
}).catch((error) => {
  navigate("/error");
});
}
useEffect(()=>{
  console.log("hello");
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
    <div className='w-[80vw] absolute top-2 left-36 flex justify-between items-center p-2  text-netflixRed'>
      <img src={logoImage} alt="logo" className='w-44'></img>
      <div>
        {
          user && 
          <div className='flex gap-2 justify-center items-center'>
            <span className='flex gap-1 justify-center items-center text-white text-sm'><FaUser />{user.displayName}</span>
            <button onClick={handelSignout} className=' text-white bg-netflixRed px-2 py-1 rounded-md text-sm'>Signout</button>
          </div> 
        }
        
       </div>    
    </div>
  )
}

export default Header;
