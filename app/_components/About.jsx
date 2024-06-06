import React from 'react'

function About() {
  return (
    <div className='h-max text-gray-600 bg-gray-200 lg:rounded-2xl max-w-[1200px] mx-auto my-8 py-2' id='about'>

        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex flex-col md:flex-row'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 text-gray-800 rou'>About Me</h2>
                    <p className='text-base text-gray-600 lg:text-lg'>
                    Hello! My name is Patryk Świderski, a passionate Front-End Developer based in Warsaw, Poland. I specialize in React and Next.js, combined with Tailwind CSS. I thrive on challenges and continuously strive to learn and master new technologies. My enthusiasm for both front-end and back-end development drives me to improve daily. When I'm not coding, I enjoy spending time in my garage, painting, or fishing. My diverse interests and commitment to personal growth reflect my dedication to delivering high-quality work in the tech industry. 
                    </p>
                </div>
            </div>
    
            <img src='/about2.jpg' className=' sm:block mx-auto rounded-3xl sm:rounded-2xl py-8 md:py-0 lg:shadow-sm shadow-gray-500 h-[320px]' alt='photo'/>
        </div>
    </div>
  )
}

export default About
