import React from 'react'

function About() {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>

        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                    Hey, my name is Patryk, and I'm a Web Developer. My passion is to create and develop a clean UI/UX for my users. My main stack currently is React/Next.js in combination with Tailwind CSS.
                    </p>
                </div>
            </div>

            <img src='/photo.jpg' className='mx-auto rounded-3xl py-8 md:py-0' alt='photo' width={300} height={300}/>
        </div>
    </div>
  )
}

export default About
