import React from 'react'
import Resumecard from './Resumecard'

const Resume = () => {
  return (
    <section  className='w-full flex flex-col justify-center items-center py-16'>
    <div id='resume' className='w-11/12'>
    <p data-aos="fade-up" className='mt-6 text-4xl text-slate-400 font-semibold'>Resume</p>
      <hr data-aos="fade-up" className=' h-n mt-3 bg-slate-400' />
      <div className='w-full flex flex-col justify-center '>
      <p data-aos="fade-up" className='mt-4 font-medium text-3xl'> Here are my experiences and qualifications.</p>
      <div className='flex  w-full justify-center'>
      <div className=' grid mt-10 grid-cols-2  gap-10  w-full align-middle justify-between items-center'>
      <Resumecard></Resumecard>
      <Resumecard></Resumecard>
      </div>
      </div>
      </div>
    </div>
    </section>
  )
}

export default Resume