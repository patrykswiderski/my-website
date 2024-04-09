import React from 'react'

function Skills() {
  return (
    <div className='border rounded-lg border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-4 place-items-center md:flex md:justify-between md:items-center'>
        <h2 className='text-gray-700 text-xl md:text-4xl font-bold m-4'>
            My <br/> Tech <br/> Stack
        </h2>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] transform transition-transform hover:scale-110'>
            <img src='/html.png' alt='html icon'/>
            <p className='mt-2'>HTML</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] transform transition-transform hover:scale-110'>
            <img src='/css.png' alt='css icon'/>
            <p className='mt-2'>CSS</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] transform transition-transform hover:scale-110'>
            <img src='/javascript.png' alt='javascript icon'/>
            <p className='mt-2'>JavaScript</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] transform transition-transform hover:scale-110'>
            <img src='/tailwind.png' alt='tailwind icon'/>
            <p className='mt-2'>Tailwind</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] transform transition-transform hover:scale-110'>
            <img src='/react.png' alt='react icon'/>
            <p className='mt-2'>React</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] transform transition-transform hover:scale-110'>
            <img src='/sass.png' alt='sass icon'/>
            <p className='mt-2'>SASS</p>
        </div>
    </div>
  )
}

export default Skills
