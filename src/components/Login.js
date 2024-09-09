import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { checkNameValidation, checkValidation } from "../utils/validate";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import {updateProfile} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const  Login=()=>{
    const[isSigninForm,setSignInForm]=useState(true);
    const[errorMessage,setErrorMessage]=useState(null);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const validateForm=()=>{
        let emailInput = email.current.value;
        let passwordInput = password.current.value;
        let message = checkValidation(emailInput, passwordInput);
        if (!isSigninForm) {
            let nameInput = name.current.value;
            let nameMessage = checkNameValidation(nameInput);
            if (nameMessage) {
                message = nameMessage;
            }
        }

        if (message===null) 
        {
           if(!isSigninForm)
           {
        createUserWithEmailAndPassword(auth, emailInput, passwordInput)
           .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(() => {
                const {uid,email,displayName} = auth.currentUser;
                dispatch(addUser({uid:uid,email:email,displayName:displayName}));
                navigate("/browse");
               }).catch((error) => {
             });
           
            console.log(user);
         })
       .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode+" "+errorMessage);
              });
            setErrorMessage(null);
           }
           else{
    signInWithEmailAndPassword(auth, emailInput, passwordInput)
    .then((userCredential) => {
    const user = userCredential.user;
    navigate("/browse");
     console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode+" "+errorMessage);
  });
            setErrorMessage(null);
           }
        } else {
           
            setErrorMessage(message);
        }
       
}
  
    const toggleSigninForm=()=>{
    setSignInForm(!isSigninForm);
    }
    return(
        <div className="relative">
        <div className="overflow-hidden w-full">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_medium.jpg" alt="background-image" className="w-full object-cover scale-110 brightness-50"></img>
        </div>
        <Header/>
        <form onSubmit={(e)=>e.preventDefault()} className="w-[400px] absolute left-1/2 top-[12%] transform -translate-x-1/2 bg-black bg-opacity-60 p-6 rounded-md">
             <h3 className="font-semibold text-[28px] mb-4 text-white ml-6">{isSigninForm===true?"Sign In":"Sign Up"}</h3>
             <div className="w-full flex flex-col justify-center items-center gap-3">
             {!isSigninForm && (<input ref={name} type="text" placeholder="FullName" className="w-5/6   border border-gray-400 rounded-sm font-normal text-sm text-gray-300 bg-black bg-opacity-45 px-4 py-3 hover:outline-2 outline-gray-200"></input>)}
             <input ref={email} type="text" placeholder="Email Address" className="w-5/6   border border-gray-400 rounded-sm font-normal text-sm text-gray-300 bg-black bg-opacity-45 px-4 py-3 hover:outline-2 outline-gray-200"></input>
             <input ref={password} type="password" placeholder="Password" className="w-5/6 border border-gray-400 rounded-sm font-normal text-sm text-gray-300 bg-black bg-opacity-45 px-4 py-3 hover:outline-2 outline-gray-200"></input>
             <button className="w-5/6 px-4 py-2 rounded-md bg-netflixRed text-white text-sm font-bold" type="submit" onClick={validateForm}>{isSigninForm===true?"Sign in":"Sign up"}</button>
             {errorMessage!=null?(<p className="w-5/6 text-sm  text-red-500 text-bold">{errorMessage}</p>):""}
             {isSigninForm && (<p className="w-5/6 text-gray-300 text-center my-1">OR</p>)}
             {isSigninForm && (<button className="w-5/6 px-4 py-2 rounded-md bg-gray-500 bg-opacity-65 text-white text-sm font-bold">Use a  sign-in code</button>)}
             {isSigninForm && (<Link className="w-5/6 text-sm text-gray-100 text-center hover:underline">Forgot password?</Link>)}
             <p className="w-5/6 text-gray-100 text-sm my-1">{isSigninForm===true?"New to Netfliks? ":"Already a Customer? "}<Link className="text-sm font-semibold text-gray-100 hover:underline" onClick={toggleSigninForm}>{isSigninForm===true?"Sign up now.":"Sign in now"}</Link></p>
             </div>
           
        </form>
       </div>
    )
}
export default Login;