import React from 'react'

const Resumecard = () => {
  return (
    <div data-aos="zoom-in-up" className='flex h-max w-full flex-col items-center justify-start py-2'>
       <p className=' text-center w-40 p-2 h-max text-2xl font-semibold border-2 border-slate-500  text-nav rounded-xl'>Internship</p>
       <div className='flex h-max justify-between w-9/12 mt-10'>
        <div className='flex flex-col items-center align-bottom'>
         <div className="c1 w-3 h-3 rounded-full bg-white border-2 border-yellow-500"></div>
         <div className= ' h-full w-n bg-slate-400'></div>
         <div className="c1 w-3 h-3 rounded-full bg-white border-2 border-yellow-500"></div>
         </div>
         
        <div className='w-11/12 border-n rounded-lg border-nav flex justify-center py-5'>
            <div className=' w-11/12 py-3 '>
            <p className='text-xl font-semibold'>Software Developer Intern</p>
            <p className='text-md font-semibold text-slate-600'>Drafteq Engineering</p>
            <p className='font-medium text-nav'>May 2023 - Aug 2023</p>
            <p className=' font-medium text-slate-500 text-justify' >In my current internship at Drafteq Engineering, I'm working as a Full Stack Developer focusing on the frontend development using React JS, where I work on creating interactive and user-friendly interfaces. Additionally, I am responsible for building the backend API using Node.js, Express.js, and MongoDB, enabling data storage and retrieval for the application.</p>
         </div>
         </div>
       </div>
    </div>
  )
}

export default Resumecard