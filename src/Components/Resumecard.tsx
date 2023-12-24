
import React from 'react'

interface inter{
  title:String,
  role:String,
  organization:String,
  duration:String,
  description:String
}

const Resumecard:React.FC<inter> = (Info) => {
  return (
    <div data-aos="zoom-in-up" className='flex h-max w-full flex-col items-center justify-start py-2'>
       <p className=' text-center w-40 p-2 h-max text-2xl font-semibold border-2 border-slate-500  text-nav rounded-xl'>{Info.title} </p>
       <div className='flex h-max justify-between w-9/12 mt-10'>
        <div className='flex flex-col items-center align-bottom'>
         <div className="c1 w-3 h-3 rounded-full bg-white border-2 border-yellow-500"></div>
         <div className= ' h-full w-n bg-slate-400'></div>
         <div className="c1 w-3 h-3 rounded-full bg-white border-2 border-yellow-500"></div>
         </div>
         
        <div className='lg:w-11/12 w-full border-n rounded-lg border-nav flex justify-center py-5'>
            <div className=' w-11/12 py-3 '>
            <p className='text-xl font-semibold'> {Info.role} </p>
            <p className='text-md font-semibold text-slate-600'> {Info.organization} </p>
            <p className='font-medium text-nav'> {Info.duration} </p>
            <p className=' font-medium text-slate-500 text-justify' > {Info.description} </p>
         </div>
         </div>
       </div>
    </div>
  )
}

export default Resumecard