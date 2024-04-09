import React from 'react'

function Contact() {
  return (
    <div className='max-w-[1200px] mx-auto bg-white sm:py-20 p-5' id='contact'>
        <div className='text-center'>
            <h2 className='text-4xl font-bold leading-tight text-gray-800'>Contact Me</h2>
        </div>

        <div className='max-w-[800px] mx-auto'>
            <div className='mt-6 bg-gray-200 rounded-xl'>
                <div className='p-10'>
                    
                    <form action='https://getform.io/f/pagxlgzb' method='POST'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                            <div>
                                <div className='mt-2.5'>
                                    <input type='text' name='name' id='' placeholder='Your Name' className='bg-gray-200 w-full px-4 py-4 text-gray-800 placeholder-gray-400 border border-gray-600 rounded-md focus:outline-none focus:border-pink-600'></input>
                                </div>
                            </div>
                          
                            <div>
                                <div className='mt-2.5'>
                                    <input type='email' name='email' id='' placeholder='Your Email' className='bg-gray-200 w-full px-4 py-4 text-gray-800 placeholder-gray-400 border border-gray-600 rounded-md focus:outline-none focus:border-pink-600'></input>
                                </div>
                            </div>

                            <div className='sm:col-span-2'>
                                <div className='mt-2.5'>
                                    <textarea name='message' id='' placeholder='Your Message' className='bg-gray-200 w-full px-4 py-4 text-gray-800 placeholder-gray-400 border border-gray-600 rounded-md focus:outline-none focus:border-pink-600' rows="4">                                      
                                    </textarea>
                                </div>
                            </div>

                            <div className='sm:col-span-2'>
                                <button type='submit' className='text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md shadow-md shadow-gray-500 transform transition-transform hover:scale-105'>
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
