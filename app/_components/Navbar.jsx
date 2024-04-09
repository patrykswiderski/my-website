"use client"
import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='bg-black text-gray-200 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
        <h1 className='text-3xl font-bold primary-color ml-4'>Patryk.dev</h1>
        <ul className='hidden md:flex'>
            <li className='p-5 transform transition-transform hover:scale-110'><a href='#skills'>Skills</a></li>
            <li className='p-5 transform transition-transform hover:scale-110'><a href='#projects'>Projects</a></li>
            <li className='p-5 transform transition-transform hover:scale-110'><a href='#about'>About</a></li>
            <li className='p-5 transform transition-transform hover:scale-110'><a href='#contact'>Contact</a></li>
        </ul>

        <div onClick={handleNav} className='block md:hidden mr-4'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size ={20}/>}
        </div>

        <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='text-3xl primary-color m-4'>Patryk Świderski</h1>
            <ul className='p-8 text-2xl'>
                <li className='p-2 transform transition-transform hover:bg-primary-color hover:bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl'><a href='#skills'>Skills</a></li>
                <li className='p-2 transform transition-transform hover:bg-primary-color hover:bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl '><a href='#projects'>Projects</a></li>
                <li className='p-2 transform transition-transform hover:bg-primary-color hover:bg-gradient-to-br from-orange-500 to-pink-500 hover:rounded-xl'><a href='#about'>About</a></li>
                <li className='p-2 transform transition-transform hover:bg-primary-color hover:bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl '><a href='#contact'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
