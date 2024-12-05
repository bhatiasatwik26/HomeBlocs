import React from 'react';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { app } from '../firebase.js';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom'

const OAuth = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleLogin = async ()=>{
      try{
          const provider = new GoogleAuthProvider();
          const auth = getAuth(app);
          const result = await signInWithPopup(auth, provider);
          console.log(result.user);
          const {email, displayName:username, photoURL:photo} = result.user;
          const res = await fetch('/api/auth/google', {
              method: 'POST',
              headers:{
                  'Content-type': 'application/json'
              },
              body:JSON.stringify({username, email, photo})
          });
          const data = await res.json();
          dispatch(signInSuccess(data));
          navigate('/home');
      }
      catch(error){
          console.log(error);
      }
    }

  return (
    <button type='button' onClick={handleGoogleLogin} className='bg-green-700 text-white p-2 rounded-lg uppercase hover:opacity-95 disabled:opacity-70 disabled:cursor-not-allowed'>Continue with google</button>
  )
}

export default OAuth