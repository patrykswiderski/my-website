"use client"
import React from 'react'
import {TypeAnimation} from "react-type-animation"
import Image from 'next/image'
import { IconBrandLinkedin,IconBrandGithub } from '@tabler/icons-react';

function Hero() {
  return (
    <div>
        <div className='grid grid-cols-1 max-w-[1200px] mx-auto bg-black'>
            
            <div className='flex flex-col justify-center items-center mx-auto my-auto w-auto h-auto'>
                <img src='/best_1200.jpg' alt='hero image' className='sm:rounded-2xl'/>
            </div>

            <div className='cols-span-2 px-5 my-auto'>
                <h1 className='text-white text text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                    <span className='primary-color'>
                      I'm a
                    </span> <br/>
                    <TypeAnimation 
                        sequence={[
                          "Web developer",
                          1000,
                          "Front-End Dev",
                          1000,
                          "React Dev",
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

                <div className='mx-auto grid grid-cols-2 place-items-center md:flex md:justify-start md:items-center gap-2 md:gap-4 my-8'>
                    <a href='https://www.linkedin.com/in/patryk-świderski' className='transform transition-transform hover:scale-110'>
                        <IconBrandLinkedin color='white' size={62}/>
                    </a>
                    
                    <a href='https://github.com/patrykswiderski' className='transform transition-transform hover:scale-110'>
                        <IconBrandGithub color='white' size={54}/>
                    </a>

                    <a href='mailto:patryk.swiderski.85@gmail.com' className='col-span-2 w-full lg:w-auto font-semibold text-center px-6 py-3 rounded-xl lg:mr-4 border border-x-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hoover:border-none transform transition-transform hover:scale-105'>
                        patryk.swiderski.85@gmail.com
                    </a>

                    <a href='/' className='col-span-2 w-full lg:w-auto text-center px-6 py-3 rounded-xl lg:mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white transform transition-transform hover:scale-105'>
                        Download CV
                    </a>
                    
                    {/* <a href='#contact' className='col-span-2 w-full lg:w-auto text-center px-6 py-3 rounded-xl lg:mr-4 border border-x-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hoover:border-none transform transition-transform hover:scale-105'>
                        Contact
                    </a> */}
                </div>
            </div>


    


        </div>
    </div>
  )
}

export default Hero
