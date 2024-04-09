import React from 'react'

function Projects() {
  return (
    <div className='max-w-1200px mx-auto p-5'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Projects</p>
            <p className='text-gray-400'>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative'>
                <img src='/port1.png' layout="fill" objestFit="cover" alt=''/>
                
            </div>
        </div>

    </div>
  )
}

export default Projects
