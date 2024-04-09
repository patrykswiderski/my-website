import React from 'react'

function About() {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-6' id='about'>

        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                    Hey, my name is Patryk and I'm passionate about front-end development, back-end development. I love challanges and getting better therefore I try to learn something new every day and master the things that I do and work on. My main stack currently is React/Next.js in combination with Tailwind CSS.
                    When I'm not coding though, you can find me in my garage, working out, or fishing. 
                    </p>
                </div>
            </div>

            <img src='/photo.jpg' className='mx-auto rounded-3xl py-8 md:py-0' alt='photo' width={300} height={300}/>
        </div>
    </div>
  )
}

export default About
