import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from './OAuth';

const SignUp = () => {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.id]: e.target.value});
  }

  const hadleSubmit = async (e)=>{
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/auth/signup',{
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    if(data.sucess === false)
    {
      setError(data.message);
    }
    else
    {
      setError(null);
      navigate('/sign-in');
    }
    setLoading(false);
  }

  return (
    <div>
      <h1 className='text-3xl text-center font-semibold mt-7 mb-3 text-slate-700'>Sign-Up</h1>
      <form onSubmit={hadleSubmit} className='flex flex-col max-w-[600px] mx-auto gap-2 border border-slate-100 p-10 rounded-xl bg-transparent'>
        <input onChange={handleChange} type="text" placeholder='username' id='username' className='border border-slate-200 p-3 rounded-lg outline-slate-300 bg-transparent'/>
        <input onChange={handleChange} type="email" placeholder='email' id='email' className='border border-slate-200 p-3 rounded-lg outline-slate-300 bg-transparent'/>
        <input onChange={handleChange} type="password" minLength='5' placeholder='password' id='password' className='border border-slate-200 p-3 rounded-lg outline-slate-300 bg-transparent'/>
        {error ? <p className='text-red-600 font-medium mb-2 text-center'>{error}</p> : null}
        <button disabled={loading} className='bg-slate-700 text-white p-2 rounded-lg uppercase hover:opacity-95 disabled:opacity-70 disabled:cursor-not-allowed mt-4'>{loading ? 'authenticating.....' : 'Sign Up'}</button>
        <OAuth />
        <p className=''>Have an account? <Link to={'/sign-in'} className='text-blue-800 hover:underline underline-offset-2'>Sign-In</Link> instead</p>
      </form>
    </div>
  )
}

export default SignUp