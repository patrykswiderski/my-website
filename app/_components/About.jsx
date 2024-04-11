import React from 'react'

function About() {
  return (
    <div className='text-gray-600 bg-gray-200 lg:rounded-2xl max-w-[1200px] mx-auto my-8 py-2' id='about'>

        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 text-gray-800 rou'>About Me</h2>
                    <p className='text-base text-gray-600 lg:text-lg'>
                    Hey, my name is Patryk and I'm passionate about front-end development, back-end development. I love challanges and getting better therefore I try to learn something new every day and master the things that I do and work on. My main stack currently is React/Next.js in combination with Tailwind CSS.
                    When I'm not coding though, you can find me in my garage, painting or fishing. 
                    </p>
                </div>
            </div>
    
            <img src='/about2.jpg' className='hidden sm:block mx-auto sm:rounded-2xl py-8 md:py-0 lg:shadow-sm shadow-gray-500 h-[320px]' alt='photo'/>
        </div>
    </div>
  )
}

export default About
