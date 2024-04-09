"use client"
import React from 'react'
import {TypeAnimation} from "react-type-animation"
import Image from 'next/image'


function Hero() {
  return (
    <div>
        <div className='grid grid-cols-1 max-w-[1200px] mx-auto bg-black'>
            
            <div className='flex flex-col justify-center items-center mx-auto my-auto w-auto h-auto'>
                <img src='/best_1200.jpg' alt='hero image'/>
            </div>

            <div className='cols-span-2 px-5 my-auto'>
                <h1 className='text-white text text-4xlsm:text-5xl lg:text-8xl font-extrabold'>
                    <span className='primary-color'>
                      I'm a
                    </span> <br/>
                    <TypeAnimation 
                        sequence={[
                          "Web developer",
                          1000,
                          "Front-End Dev",
                          1000,
                          "Back-End Dev",
                          1000,
                          "Recat Dev",
                          1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>

                <p className='text-white sm:text-lg my-6 lg:text-xl'>
                    My name is Patryk Świderski. A passionate Front-end React Developer based in Warsaw, Poland.
                </p>

                <div className='my-8'>
                    <a href='/' className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'>
                        Download CV
                    </a>
                    <a href='#contact' className='px-6 py-3 w-full rounded-xl mr-4 border border-x-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hoover:border-none'>
                        Contact
                    </a>
                </div>
            </div>


    


        </div>
    </div>
  )
}

export default Hero
