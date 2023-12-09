
import Card  from './Card'
import React from 'react'

const Works = () => {
  return (
    <section className='w-full flex flex-col justify-center items-center'>
    <div id='works' className='w-11/12'>
    <p data-aos="fade-up" className='mt-6 text-4xl text-slate-400 font-semibold'>Works</p>
      <hr data-aos="fade-up" className=' h-n mt-3 bg-slate-400' />
      <div className='w-full flex flex-col justify-center '>
      <p data-aos="fade-up" className='mt-4 font-medium text-3xl'> Here are some of my works.</p>
      <div className='flex  w-full justify-center'>
      <div className='grid mt-10 grid-cols-2  gap-10  w-max align-middle justify-between items-center'>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      </div>
      </div>
      </div>
    </div>
    </section>
  )
}

export default Works