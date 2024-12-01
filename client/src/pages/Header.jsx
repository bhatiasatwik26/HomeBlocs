import React from 'react';
import { GrSearchAdvanced } from "react-icons/gr";
import { RiBuilding3Fill } from "react-icons/ri";


const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md w-full'>
        <div className="container w-full h-full mx-auto flex items-center justify-between px-2 py-3">
            <h1 className='text-slate-500 font-semibold text-2xl flex items-center justify-center'>
                Home
                <span className='text-slate-700'>
                    Blocs
                </span>
                <RiBuilding3Fill className='text-slate-700'></RiBuilding3Fill>
            </h1>
            <form action="" className='bg-slate-100 flex justify-between items-center px-3 py-2 rounded-md w-1/2'>
                <input type='text' placeholder='Search' className='outline-none bg-transparent flex-1'/>
                <GrSearchAdvanced className='text-slate-600 text-2xl cursor-pointer hover:text-slate-700'/>
            </form>
            <p className='text-slate-500 font-semibold text-lg hover:text-slate-600 duration-150 cursor-pointer'>Sign-in</p>
        </div>
    </header>
  )
}

export default Header